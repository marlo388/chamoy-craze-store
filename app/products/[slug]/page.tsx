import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug } from "@/src/data/products";
import { formatMoney } from "@/src/lib/money";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="shell product-layout">
      <div className="product-gallery">
        <img alt={product.name} src={product.image} />
        <div className="product-thumbs">
          <button className="thumb thumb--active" type="button">
            <img alt={`${product.name} thumbnail`} src={product.image} />
          </button>
        </div>
      </div>
      <div className="info-box">
        <div className="eyebrow">Product</div>
        <h1>{product.name}</h1>
        <div className="store-card__price-row">
          <div className="price">{formatMoney(product.price)}</div>
          {product.compareAtPrice ? (
            <span className="compare-price">{formatMoney(product.compareAtPrice)}</span>
          ) : null}
          {product.saleNote ? <span className="sale-tag">{product.saleNote}</span> : null}
          {product.bestseller ? <span className="bestseller-tag">Bestseller</span> : null}
        </div>
        <div className="rating-row">
          <span className="rating-stars">★★★★★</span>
          <span className="muted">4.9 rated by snack lovers</span>
        </div>
        <p className="lead">{product.description}</p>
        <div className="trust-row">
          <span>Fast shipping</span>
          <span>Secure checkout</span>
          <span>Fresh flavor</span>
        </div>

        <h3>Highlights</h3>
        <ul className="feature-list">
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="detail-panels">
          <div className="detail-panel">
            <h3>Why People Love It</h3>
            <p className="muted">
              Bold flavor, easy snacking, and a strong spicy kick that stands out.
            </p>
          </div>
          <div className="detail-panel">
            <h3>Shipping & Freshness</h3>
            <p className="muted">
              Packed for freshness and ready to ship fast so your order gets there quickly.
            </p>
          </div>
        </div>

        <div className="button-row">
          <Link className="button" href={`/checkout?slug=${product.slug}`}>
            Buy now
          </Link>
          <Link className="button-secondary" href="/shop">
            Back to shop
          </Link>
        </div>
      </div>
    </main>
  );
}
