import tshirt from "@/assets/p-tshirt.jpg";
import jeans from "@/assets/p-jeans.jpg";
import vans from "@/assets/p-vans.jpg";
import shirt from "@/assets/p-shirt.jpg";
import kids from "@/assets/p-kids.jpg";
import runner from "@/assets/p-runner.jpg";

export type Category = {
  slug: string;
  title: string;
  emoji: string;
  group: "audience" | "style" | "type" | "highlight";
};

/** Flat + extensible: new categories/subcategories only add rows here. */
export const categories: Category[] = [
  { slug: "men", title: "مردانه", emoji: "👔", group: "audience" },
  { slug: "women", title: "زنانه", emoji: "👗", group: "audience" },
  { slug: "kids", title: "بچگانه", emoji: "🧒", group: "audience" },
  { slug: "casual", title: "کژوال", emoji: "🧥", group: "style" },
  { slug: "sport", title: "اسپرت", emoji: "🏃", group: "style" },
  { slug: "jeans", title: "جین", emoji: "👖", group: "type" },
  { slug: "shirt", title: "پیراهن", emoji: "👕", group: "type" },
  { slug: "tshirt", title: "تیشرت", emoji: "🩳", group: "type" },
  { slug: "sport-tshirt", title: "تیشرت ورزشی", emoji: "🎽", group: "type" },
  { slug: "shoes", title: "کفش", emoji: "👟", group: "type" },
  { slug: "vans", title: "ونس", emoji: "🛹", group: "type" },
  { slug: "new", title: "جدیدترین‌ها", emoji: "✨", group: "highlight" },
  { slug: "sale", title: "تخفیف‌ها", emoji: "🔥", group: "highlight" },
];

export type Product = {
  id: string;
  title: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  colors: string[];
  sizes: string[];
  rating: number;
  categories: string[];
  isNew?: boolean;
};

const base: Omit<Product, "id">[] = [
  {
    title: "تیشرت اورسایز نخی",
    brand: "کارو بیسیک",
    price: 890000,
    oldPrice: 1190000,
    image: tshirt,
    colors: ["سفید", "مشکی"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    categories: ["men", "casual", "tshirt", "sale", "new"],
    isNew: true,
  },
  {
    title: "شلوار جین راسته",
    brand: "کارو دنیم",
    price: 1980000,
    image: jeans,
    colors: ["آبی"],
    sizes: ["30", "32", "34", "36"],
    rating: 4.4,
    categories: ["men", "women", "jeans", "casual"],
  },
  {
    title: "کفش کتانی اسکیت",
    brand: "کارو استریت",
    price: 2450000,
    oldPrice: 2990000,
    image: vans,
    colors: ["مشکی"],
    sizes: ["40", "41", "42", "43"],
    rating: 4.8,
    categories: ["men", "women", "shoes", "vans", "casual", "sale"],
  },
  {
    title: "پیراهن لینن زنانه",
    brand: "کارو استودیو",
    price: 1560000,
    image: shirt,
    colors: ["کرم"],
    sizes: ["S", "M", "L"],
    rating: 4.7,
    categories: ["women", "shirt", "casual", "new"],
    isNew: true,
  },
  {
    title: "هودی ورزشی بچگانه",
    brand: "کارو کیدز",
    price: 1120000,
    oldPrice: 1390000,
    image: kids,
    colors: ["رنگی"],
    sizes: ["6", "8", "10", "12"],
    rating: 4.5,
    categories: ["kids", "sport", "sport-tshirt", "sale"],
  },
  {
    title: "کتانی رانینگ سبک",
    brand: "کارو اسپرت",
    price: 3190000,
    image: runner,
    colors: ["سفید"],
    sizes: ["40", "41", "42", "43", "44"],
    rating: 4.9,
    categories: ["men", "women", "shoes", "sport", "new"],
    isNew: true,
  },
];

/** Preview dataset — repeated to prove the grid scales to large catalogs. */
export const products: Product[] = Array.from({ length: 5 }).flatMap((_, round) =>
  base.map((p, i) => {
    const item: Product = {
      ...p,
      id: `p-${round}-${i}`,
      price: p.price + round * 40000,
    };
    if (p.oldPrice) item.oldPrice = p.oldPrice + round * 40000;
    return item;
  }),
);

export function productsByCategory(slug?: string) {
  if (!slug) return products;
  return products.filter((p) => p.categories.includes(slug));
}

export function formatPrice(v: number) {
  return v.toLocaleString("fa-IR");
}

export function discountPercent(p: Product) {
  if (!p.oldPrice) return null;
  return Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
}
