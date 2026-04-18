import type { CheckoutItem, CheckoutResult, PaymentProvider } from "./types";

type IvnoLinkMap = Record<string, string>;

function envKeyForSlug(slug: string) {
  return `IVNO_PAYMENT_LINK_${slug.replace(/-/g, "_").toUpperCase()}`;
}

function parseLinkMap(): IvnoLinkMap {
  const raw = process.env.IVNO_PAYMENT_LINKS;

  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw) as IvnoLinkMap;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function getIvnoLink(item: CheckoutItem) {
  const map = parseLinkMap();
  const specificLink = process.env[envKeyForSlug(item.slug)];

  if (specificLink) {
    return specificLink;
  }

  if (map[item.slug]) {
    return map[item.slug];
  }

  if (process.env.IVNO_PAYMENT_LINK) {
    return process.env.IVNO_PAYMENT_LINK;
  }

  return undefined;
}

export class IvnoPaymentProvider implements PaymentProvider {
  async createCheckout(item: CheckoutItem): Promise<CheckoutResult> {
    const paymentLink = getIvnoLink(item);

    if (!paymentLink) {
      throw new Error(
        `Ivno link missing for ${item.name}. Add an IVNO payment link for this product first.`,
      );
    }

    return {
      provider: "ivno",
      redirectUrl: paymentLink,
      message: `Redirecting to Ivno for ${item.name}.`,
    };
  }
}
