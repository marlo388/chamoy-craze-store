import { NextResponse } from "next/server";
import { getPaymentProvider } from "@/src/lib/payments";

export async function POST(request: Request) {
  const formData = await request.formData();
  const siteUrl = process.env.SITE_URL || "http://localhost:3000";

  const item = {
    id: String(formData.get("id") || ""),
    slug: String(formData.get("slug") || ""),
    name: String(formData.get("name") || ""),
    price: Number(formData.get("price") || 0),
  };

  try {
    const provider = getPaymentProvider();
    const result = await provider.createCheckout(item);

    if (result.redirectUrl) {
      return NextResponse.redirect(result.redirectUrl);
    }

    const fallbackUrl = `${siteUrl}/checkout/success?provider=${encodeURIComponent(result.provider)}&product=${encodeURIComponent(item.name)}`;

    return NextResponse.redirect(fallbackUrl);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Payment setup is incomplete. Please try again.";
    const retryUrl = `${siteUrl}/checkout?slug=${encodeURIComponent(
      item.slug,
    )}&error=${encodeURIComponent(message)}`;

    return NextResponse.redirect(retryUrl);
  }
}
