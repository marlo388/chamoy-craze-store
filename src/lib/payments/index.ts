import { ManualPaymentProvider } from "./manual";
import { PayPalPaymentProvider } from "./paypal";
import { StripePaymentProvider } from "./stripe";
import type { PaymentProvider } from "./types";

export function getPaymentProvider(): PaymentProvider {
  const provider = process.env.PAYMENT_PROVIDER || "manual";

  switch (provider) {
    case "stripe":
      return new StripePaymentProvider();
    case "paypal":
      return new PayPalPaymentProvider();
    case "manual":
    default:
      return new ManualPaymentProvider();
  }
}
