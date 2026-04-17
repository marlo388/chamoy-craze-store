import { redirect } from "next/navigation";
import { getProductBySlug } from "@/src/data/products";
import { formatMoney } from "@/src/lib/money";

type SearchParams = Promise<{ slug?: string }>;

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { slug } = await searchParams;

  if (!slug) {
    redirect("/shop");
  }

  const product = getProductBySlug(slug);

  if (!product) {
    redirect("/shop");
  }

  return (
    <main className="shell section">
      <div className="checkout-box">
        <div className="eyebrow">Checkout</div>
        <h1 className="section-title">Finish your order.</h1>
        <div className="product-meta">
          <div>
            <h3>{product.name}</h3>
            <p className="muted">{product.description}</p>
          </div>
          <div className="price">{formatMoney(product.price)}</div>
        </div>

        <form action="/api/checkout" method="post" className="checkout-form">
          <input type="hidden" name="id" value={product.id} />
          <input type="hidden" name="name" value={product.name} />
          <input type="hidden" name="price" value={product.price} />

          <label>
            Full name
            <input name="customerName" placeholder="Jane Smith" required />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="jane@example.com" required />
          </label>

          <label>
            Notes
            <textarea
              name="notes"
              placeholder="Delivery note, product details, or order request"
              rows={4}
            />
          </label>

          <button type="submit">Continue to payment</button>
        </form>
      </div>
    </main>
  );
}
