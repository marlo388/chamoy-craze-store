import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chamoy Craze",
  description: "One flavor. Infinite cravings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="shell site-header__inner">
            <Link className="brand" href="/">
              Chamoy Craze
            </Link>
            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/products/carne-seca-lumbre-spicy">Carne Seca</Link>
              <Link href="/#support">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="shell footer-grid" id="support">
            <div>
              <h3>Never Miss a Restock</h3>
              <p className="muted footer-copy">
                At Chamoy Craze, we bring bold flavor to snacks, fruit,
                and cravings of every kind.
              </p>
              <p className="muted footer-copy">
                2525 East Belknap Street, Fort Worth TX 76111
              </p>
              <p className="muted footer-copy">Micheladasduran@gmail.com</p>
            </div>
            <div>
              <h3>Customer Support</h3>
              <div className="footer-links">
                <Link href="/shop">Shop</Link>
                <Link href="/products/carne-seca-lumbre-spicy">Carne Seca</Link>
                <Link href="/#support">Contact Us</Link>
              </div>
            </div>
            <div>
              <h3>Payment Methods</h3>
              <p className="muted footer-copy">
                Visa, Mastercard, American Express, PayPal, Apple Pay
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
