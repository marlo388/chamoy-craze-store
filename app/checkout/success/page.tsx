export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ provider?: string; product?: string }>;
}) {
  const { provider, product } = await searchParams;

  return (
    <main className="shell section">
      <div className="checkout-box">
        <div className="eyebrow">Order status</div>
        <h1 className="section-title">Checkout step completed.</h1>
        <p className="lead">
          Product: <strong>{product || "Your item"}</strong>
        </p>
        <p className="lead">
          Provider: <strong>{provider || "manual"}</strong>
        </p>
        <p className="muted">
          Replace this page with your real post-payment confirmation workflow after you connect your live processor.
        </p>
      </div>
    </main>
  );
}
