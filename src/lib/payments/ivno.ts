import type { CheckoutRequest, CheckoutResult, PaymentProvider } from "./types";

type IvnoCreatePaymentResponse = {
  success?: boolean;
  payment_url?: string;
  message?: string;
  transaction_id?: string | number;
};

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}. Add it in Vercel Environment Variables.`);
  }

  return value;
}

function addQueryParam(url: string, key: string, value?: string) {
  if (!value) {
    return url;
  }

  const parsed = new URL(url);
  parsed.searchParams.set(key, value);
  return parsed.toString();
}

export class IvnoPaymentProvider implements PaymentProvider {
  async createCheckout({
    item,
    customer,
    siteUrl,
  }: CheckoutRequest): Promise<CheckoutResult> {
    const apiKey = getRequiredEnv("IVNO_API_KEY");
    const apiSecret = getRequiredEnv("IVNO_API_SECRET");
    const orderId = `${item.slug}-${Date.now()}`;
    const domain = new URL(siteUrl).hostname;
    const webhookUrl = `${siteUrl}/api/webhooks/ivno`;
    const returnUrl = `${siteUrl}/checkout/success?provider=ivno&product=${encodeURIComponent(item.name)}&order=${encodeURIComponent(orderId)}`;

    const response = await fetch("https://app.ivno.io/api/ivno/v1/payments/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey,
        "X-Api-Secret": apiSecret,
      },
      body: JSON.stringify({
        amount: item.price,
        currency: "USD",
        order_id: orderId,
        return_url: returnUrl,
        webhook_url: webhookUrl,
        email: customer.email,
        domain,
      }),
      cache: "no-store",
    });

    const result = (await response.json().catch(() => ({}))) as IvnoCreatePaymentResponse;

    if (!response.ok || !result.payment_url) {
      throw new Error(
        result.message ||
          `Ivno checkout could not be created for ${item.name}. Check your Ivno API keys and merchant settings.`,
      );
    }

    let redirectUrl = result.payment_url;
    redirectUrl = addQueryParam(
      redirectUrl,
      "display_curr",
      process.env.IVNO_DISPLAY_CURRENCY || "USD",
    );
    redirectUrl = addQueryParam(
      redirectUrl,
      "color",
      process.env.IVNO_CHECKOUT_COLOR,
    );
    redirectUrl = addQueryParam(
      redirectUrl,
      "logo",
      process.env.IVNO_CHECKOUT_LOGO_URL,
    );

    return {
      provider: "ivno",
      redirectUrl,
      message: `Redirecting to Ivno for ${item.name}.`,
    };
  }
}
