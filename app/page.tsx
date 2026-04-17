import Link from "next/link";
import { products } from "@/src/data/products";
import { formatMoney } from "@/src/lib/money";

const featured = products[0];

export default function HomePage() {
  return (
    <main>
      <section className="shell storefront-hero">
        <div className="storefront-hero__copy">
          <div className="eyebrow">Home</div>
          <h1>ONE FLAVOR. INFINITE CRAVINGS.</h1>
          <p>Add to all your snacks, fruits, and more!</p>
        </div>
      </section>

      <section className="shell section storefront-section">
        <div className="section-head storefront-head">
          <div>
            <div className="eyebrow">Shop Now</div>
            <h2 className="storefront-title">Featured Product</h2>
          </div>
          <Link className="store-link" href="/shop">
            View all
          </Link>
        </div>
        <div className="featured-product">
          <div className="featured-product__media">
            <img alt={featured.name} src={featured.image} />
          </div>
          <div className="featured-product__content">
            <div className="eyebrow">Open media 1 in modal</div>
            <h2>{featured.name}</h2>
            <div className="badge-row">
              {featured.saleNote ? <div className="sale-pill">{featured.saleNote}</div> : null}
              {featured.bestseller ? <div className="bestseller-pill">Bestseller</div> : null}
            </div>
            {featured.compareAtPrice ? (
              <p className="featured-price featured-price--sale">
                Regular price <span>{formatMoney(featured.compareAtPrice)}</span> Sale price {formatMoney(featured.price)}
              </p>
            ) : (
              <p className="featured-price">Regular price {formatMoney(featured.price)}</p>
            )}
            <p className="muted">Unit price / per</p>
            <div className="trust-row">
              <span>Fast shipping</span>
              <span>Secure checkout</span>
              <span>Top-rated flavor</span>
            </div>
            <div className="variant-box">Default Title - {formatMoney(featured.price)}</div>
            <div className="quantity-box">
              <span>Quantity</span>
              <strong>(0 in cart)</strong>
            </div>
            <div className="button-row">
              <Link className="button" href={`/products/${featured.slug}`}>
                Add to cart
              </Link>
              <Link className="button-secondary" href={`/products/${featured.slug}`}>
                View full details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="shell section">
        <div className="section-head storefront-head">
          <div>
            <div className="eyebrow">All Products</div>
            <h2 className="storefront-title">Shop the full lineup</h2>
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
      </section>

      <section className="shell media-strip">
        <div className="media-card">
          <div className="eyebrow">As Seen On TikTok</div>
          <h2>@micheladasduran</h2>
          <p className="muted">
            Bold flavor, spicy snacks, and the product everyone keeps asking for.
          </p>
        </div>
        <div className="media-card">
          <div className="eyebrow">Become A Member</div>
          <h2>Sign up for discounts, offers, and more!</h2>
          <Link className="button" href="/shop">
            Join now
          </Link>
        </div>
      </section>
    </main>
  );
}
