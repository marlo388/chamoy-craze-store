import type { CheckoutRequest, CheckoutResult, PaymentProvider } from "./types";

export class StripePaymentProvider implements PaymentProvider {
  async createCheckout({ item, siteUrl }: CheckoutRequest): Promise<CheckoutResult> {

    return {
      provider: "stripe",
      message:
        "Add your real Stripe Checkout Session creation code in src/lib/payments/stripe.ts.",
      redirectUrl: `${siteUrl}/checkout/success?provider=stripe&product=${encodeURIComponent(item.name)}`,
    };
  }
}
