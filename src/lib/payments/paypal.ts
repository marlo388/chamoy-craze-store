import type { CheckoutItem, CheckoutResult, PaymentProvider } from "./types";

export class PayPalPaymentProvider implements PaymentProvider {
  async createCheckout(item: CheckoutItem): Promise<CheckoutResult> {
    const siteUrl = process.env.SITE_URL || "http://localhost:3000";

    return {
      provider: "paypal",
      message:
        "Add your real PayPal order creation code in src/lib/payments/paypal.ts.",
      redirectUrl: `${siteUrl}/checkout/success?provider=paypal&product=${encodeURIComponent(item.name)}`,
    };
  }
}
