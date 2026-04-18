export type CheckoutItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
};

export type CheckoutCustomer = {
  name: string;
  email: string;
  notes?: string;
};

export type CheckoutRequest = {
  item: CheckoutItem;
  customer: CheckoutCustomer;
  siteUrl: string;
};

export type CheckoutResult = {
  provider: string;
  redirectUrl?: string;
  message?: string;
};

export interface PaymentProvider {
  createCheckout(request: CheckoutRequest): Promise<CheckoutResult>;
}
