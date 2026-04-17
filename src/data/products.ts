export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  image: string;
  features: string[];
  saleNote?: string;
  bestseller?: boolean;
};

export const products: Product[] = [
  {
    id: "prod_001",
    slug: "carne-seca-lumbre-spicy",
    name: "Carne Seca Lumbre (spicy) 2.0 OZ",
    price: 5.99,
    compareAtPrice: 26,
    description: "Carne Seca Lumbre Spicy lime flavor!",
    image:
      "/products/carne-seca-lumbre.png",
    features: [
      "Spicy lime flavor",
      "2.0 ounce bag",
      "Beef jerky snack",
    ],
    saleNote: "🔥 Limited Time Sale",
    bestseller: true,
  },
  {
    id: "prod_002",
    slug: "tizon-fuego-powder",
    name: "Tizon Fuego Powder",
    price: 6,
    compareAtPrice: 13,
    description: "Spicy, tangy, savory, citrusy seasoning powder.",
    image: "/products/tizon-fuego-powder.png",
    features: ["Spicy", "Tangy", "Savory"],
    saleNote: "Limited Time Sale",
  },
  {
    id: "prod_003",
    slug: "chamoy-pickle",
    name: "Chamoy Pickle",
    price: 4.99,
    compareAtPrice: 7.99,
    description: "Classic chamoy pickle snack.",
    image: "/products/chamoy-pickle.png",
    features: ["Chamoy flavor", "Pickle snack", "Bold taste"],
    saleNote: "Limited Time Sale",
  },
  {
    id: "prod_004",
    slug: "gushers-chamoy-candy",
    name: "Gushers Chamoy Candy",
    price: 4.99,
    compareAtPrice: 10.99,
    description: "Sweet and spicy gushers coated in chamoy flavor.",
    image: "/products/gushers-chamoy-candy.png",
    features: ["Chamoy candy", "Sweet and spicy", "Snack size"],
    saleNote: "Limited Time Sale",
  },
  {
    id: "prod_005",
    slug: "michelada-mix-32-oz",
    name: "Michelada Mix 32 OZ",
    price: 10.99,
    compareAtPrice: 25.99,
    description: "Michelada mix with bold spicy lime flavor.",
    image: "/products/michelada-mix-32-oz.png",
    features: ["32 ounce bottle", "Spicy lime taste", "Michelada mix"],
    saleNote: "Limited Time Sale",
  },
  {
    id: "prod_006",
    slug: "michelada-mix-16-oz",
    name: "Michelada Mix 16 OZ",
    price: 5.99,
    compareAtPrice: 14.19,
    description: "Spicy lime taste. Mix 4 oz to 12 oz beer.",
    image: "/products/carne-seca-lumbre.png",
    features: ["16 ounce bottle", "Spicy lime taste", "Easy mix ratio"],
    saleNote: "Limited Time Sale",
  },
  {
    id: "prod_007",
    slug: "peach-ring-chamoy-candy",
    name: "Peach Ring Chamoy Candy",
    price: 4.99,
    compareAtPrice: 10.99,
    description: "Peach ring candy with chamoy flavor.",
    image: "/products/peach-ring-chamoy-candy.png",
    features: ["Peach rings", "Chamoy candy", "Sweet and spicy"],
    saleNote: "Limited Time Sale",
  },
  {
    id: "prod_008",
    slug: "tapatio-hot-pickle",
    name: "Tapatio HOT Pickle",
    price: 4.29,
    description: "Hot pickle with bold Tapatio flavor.",
    image: "/products/tapatio-hot-pickle.png",
    features: ["Hot pickle", "Spicy flavor", "Single snack"],
  },
  {
    id: "prod_009",
    slug: "watermelon-chamoy-candy",
    name: "Watermelon Chamoy Candy",
    price: 4.99,
    compareAtPrice: 10.99,
    description: "Watermelon candy with chamoy flavor.",
    image: "/products/watermelon-chamoy-candy.png",
    features: ["Watermelon candy", "Chamoy coating", "Sweet and spicy"],
    saleNote: "Limited Time Sale",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
