import Link from "next/link";
import { products } from "@/src/data/products";
import { formatMoney } from "@/src/lib/money";

export default function ShopPage() {
  return (
    <main className="shell section">
      <div className="section-head storefront-head">
        <div>
          <div className="eyebrow">Shop Now</div>
          <h1 className="storefront-title">All Products</h1>
        </div>
      </div>

      <div className="store-grid">
        {products.map((product) => (
          <article className="store-card" key={product.id}>
            <img alt={product.name} src={product.image} />
            <div className="store-card__body">
              <h3>{product.name}</h3>
              <div className="store-card__price-row">
                <p className="price">{formatMoney(product.price)}</p>
                {product.compareAtPrice ? (
                  <span className="compare-price">{formatMoney(product.compareAtPrice)}</span>
                ) : null}
                {product.saleNote ? <span className="sale-tag">{product.saleNote}</span> : null}
                {product.bestseller ? <span className="bestseller-tag">Bestseller</span> : null}
              </div>
              <p className="muted">{product.description}</p>
              <Link className="button" href={`/products/${product.slug}`}>
                View full details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
