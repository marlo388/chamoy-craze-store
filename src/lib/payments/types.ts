export type CheckoutItem = {
  id: string;
  name: string;
  price: number;
};

export type CheckoutResult = {
  provider: string;
  redirectUrl?: string;
  message?: string;
};

export interface PaymentProvider {
  createCheckout(item: CheckoutItem): Promise<CheckoutResult>;
}
