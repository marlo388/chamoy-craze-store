# Flex Store

This is a starter ecommerce website built so you can:

- add any product by editing one file
- choose your payment processor later
- customize the design without changing the core structure

## 1. Open the project folder

Project folder:

`C:\Users\melab\Documents\Codex\2026-04-17-i-need-step-by-step-on\flex-store`

## 2. Install Node.js

Install Node.js 20 or newer from:

`https://nodejs.org`

## 3. Install the website

Open PowerShell in this folder and run:

```powershell
npm install
```

## 4. Start the website

Run:

```powershell
npm run dev
```

Then open:

`http://localhost:3000`

## 5. Add products

Put all your products in:

`src/data/products.ts`

Each product has:

- `id`
- `slug`
- `name`
- `price`
- `description`
- `image`
- `features`

If you want to add a new product, copy one of the existing product objects and change the values.

## 6. Change the homepage text

Edit:

`app/page.tsx`

## 7. Change the colors and design

Edit:

`app/globals.css`

## 8. Choose your payment processor

Copy `.env.example` to `.env.local`, then set:

```env
PAYMENT_PROVIDER=manual
```

Available starter options in this project:

- `manual`
- `ivno`
- `stripe`
- `paypal`

## 9. Payment files

Payment routing starts here:

`app/api/checkout/route.ts`

Payment logic lives here:

- `src/lib/payments/index.ts`
- `src/lib/payments/ivno.ts`
- `src/lib/payments/manual.ts`
- `src/lib/payments/stripe.ts`
- `src/lib/payments/paypal.ts`

If you want a different payment processor, create another file in:

`src/lib/payments`

Then register it in:

`src/lib/payments/index.ts`

## 10. How the payment flow works

1. Customer opens a product page.
2. Customer clicks `Buy now`.
3. The website sends the product to `app/api/checkout/route.ts`.
4. That route picks the provider from `.env.local`.
5. The provider returns a checkout URL or instructions.
6. The customer is sent to the processor or shown the manual payment message.

## 11. Important note

`stripe.ts` and `paypal.ts` in this starter are safe placeholders. They show you where to put your real integration code.

`ivno.ts` is set up to use Ivno-hosted payment links. Add one payment link per product in your environment variables, then the site will redirect buyers straight to Ivno checkout.

That means:

- the website design is ready
- the product structure is ready
- the payment architecture is ready
- you still need to add your real Ivno links or final payment API calls

## 13. Ivno setup

If you want to use Ivno right now, set:

```env
PAYMENT_PROVIDER=ivno
SITE_URL=https://www.chamoycraze.online
```

Then add either:

- one fallback Ivno link for all products:

```env
IVNO_PAYMENT_LINK=https://your-ivno-link
```

- or one Ivno link per product:

```env
IVNO_PAYMENT_LINK_CARNE_SECA_LUMBRE_SPICY=https://your-ivno-link
IVNO_PAYMENT_LINK_TIZON_FUEGO_POWDER=https://your-ivno-link
IVNO_PAYMENT_LINK_CHAMOY_PICKLE=https://your-ivno-link
```

The product checkout route already supports these Ivno payment links.

## 12. Fastest way to customize this

Edit these files first:

1. `src/data/products.ts`
2. `app/page.tsx`
3. `app/globals.css`
4. `.env.local`

If you want, the next step can be:

- I wire this starter to Stripe for you
- I wire this starter to PayPal for you
- I turn product data into an admin dashboard
