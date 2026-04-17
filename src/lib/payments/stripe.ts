import type { CheckoutItem, CheckoutResult, PaymentProvider } from "./types";

export class StripePaymentProvider implements PaymentProvider {
  async createCheckout(item: CheckoutItem): Promise<CheckoutResult> {
    const siteUrl = process.env.SITE_URL || "http://localhost:3000";

    return {
      provider: "stripe",
      message:
        "Add your real Stripe Checkout Session creation code in src/lib/payments/stripe.ts.",
      redirectUrl: `${siteUrl}/checkout/success?provider=stripe&product=${encodeURIComponent(item.name)}`,
    };
  }
}
