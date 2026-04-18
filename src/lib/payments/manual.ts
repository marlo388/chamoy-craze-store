import type { CheckoutRequest, CheckoutResult, PaymentProvider } from "./types";

export class ManualPaymentProvider implements PaymentProvider {
  async createCheckout({ item }: CheckoutRequest): Promise<CheckoutResult> {
    return {
      provider: "manual",
      message: `Manual checkout selected for ${item.name}. Replace this with bank transfer, invoice, cash, or a custom provider.`,
    };
  }
}
