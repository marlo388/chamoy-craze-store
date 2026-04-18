import type { CheckoutRequest, CheckoutResult, PaymentProvider } from "./types";

export class PayPalPaymentProvider implements PaymentProvider {
  async createCheckout({ item, siteUrl }: CheckoutRequest): Promise<CheckoutResult> {

    return {
      provider: "paypal",
      message:
        "Add your real PayPal order creation code in src/lib/payments/paypal.ts.",
      redirectUrl: `${siteUrl}/checkout/success?provider=paypal&product=${encodeURIComponent(item.name)}`,
    };
  }
}
