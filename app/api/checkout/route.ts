import { NextResponse } from "next/server";
import { getPaymentProvider } from "@/src/lib/payments";

export async function POST(request: Request) {
  const formData = await request.formData();

  const item = {
    id: String(formData.get("id") || ""),
    name: String(formData.get("name") || ""),
    price: Number(formData.get("price") || 0),
  };

  const provider = getPaymentProvider();
  const result = await provider.createCheckout(item);

  if (result.redirectUrl) {
    return NextResponse.redirect(result.redirectUrl);
  }

  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  const fallbackUrl = `${siteUrl}/checkout/success?provider=${encodeURIComponent(result.provider)}&product=${encodeURIComponent(item.name)}`;

  return NextResponse.redirect(fallbackUrl);
}
