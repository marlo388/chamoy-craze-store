import type { CheckoutItem, CheckoutResult, PaymentProvider } from "./types";

export class ManualPaymentProvider implements PaymentProvider {
  async createCheckout(item: CheckoutItem): Promise<CheckoutResult> {
    return {
      provider: "manual",
      message: `Manual checkout selected for ${item.name}. Replace this with bank transfer, invoice, cash, or a custom provider.`,
    };
  }
}
