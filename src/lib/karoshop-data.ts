import tshirt from "@/assets/p-tshirt.jpg";
import jeans from "@/assets/p-jeans.jpg";
import vans from "@/assets/p-vans.jpg";
import shirt from "@/assets/p-shirt.jpg";
import kids from "@/assets/p-kids.jpg";
import runner from "@/assets/p-runner.jpg";
import flannel from "@/assets/p-flannel.jpg";
import sportTee from "@/assets/p-sport-tee.jpg";
import momJeans from "@/assets/p-mom-jeans.jpg";
import womenTee from "@/assets/p-women-tee.jpg";
import vansWhite from "@/assets/p-vans-white.jpg";
import kidsTee from "@/assets/p-kids-tee.jpg";
import kidsJeans from "@/assets/p-kids-jeans.jpg";
import kidsShoes from "@/assets/p-kids-shoes.jpg";
import womenSport from "@/assets/p-women-sport.jpg";
import oxford from "@/assets/p-oxford.jpg";

export type Category = {
  slug: string;
  title: string;
  icon: string;
  group: "audience" | "style" | "type" | "highlight";
};

/** Flat + extensible: new categories/subcategories only add rows here. */
export const categories: Category[] = [
  { slug: "men", title: "مردانه", icon: "shirt", group: "audience" },
  { slug: "women", title: "زنانه", icon: "sparkle", group: "audience" },
  { slug: "kids", title: "بچگانه", icon: "baby", group: "audience" },
  { slug: "casual", title: "کژوال", icon: "layers", group: "style" },
  { slug: "sport", title: "اسپرت", icon: "activity", group: "style" },
  { slug: "jeans", title: "جین", icon: "ruler", group: "type" },
  { slug: "shirt", title: "پیراهن", icon: "shirt", group: "type" },
  { slug: "tshirt", title: "تیشرت", icon: "shirt", group: "type" },
  { slug: "sport-tshirt", title: "تیشرت ورزشی", icon: "activity", group: "type" },
  { slug: "shoes", title: "کفش", icon: "footprints", group: "type" },
  { slug: "vans", title: "ونس", icon: "footprints", group: "type" },
  { slug: "new", title: "جدیدترین‌ها", icon: "sparkles", group: "highlight" },
  { slug: "sale", title: "تخفیف‌ها", icon: "flame", group: "highlight" },
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
  {
    title: "پیراهن فلانل چهارخانه",
    brand: "کارو استریت",
    price: 1740000,
    oldPrice: 2080000,
    image: flannel,
    colors: ["قرمز", "مشکی"],
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.5,
    categories: ["men", "shirt", "casual", "sale"],
  },
  {
    title: "تیشرت ورزشی تنفس‌پذیر",
    brand: "کارو اسپرت",
    price: 980000,
    image: sportTee,
    colors: ["سرمه‌ای", "مشکی"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    categories: ["men", "sport", "tshirt", "sport-tshirt", "new"],
    isNew: true,
  },
  {
    title: "شلوار جین مام‌فیت",
    brand: "کارو دنیم",
    price: 2140000,
    image: momJeans,
    colors: ["آبی روشن"],
    sizes: ["36", "38", "40", "42"],
    rating: 4.7,
    categories: ["women", "jeans", "casual", "new"],
    isNew: true,
  },
  {
    title: "تیشرت یقه‌گرد زنانه",
    brand: "کارو بیسیک",
    price: 760000,
    oldPrice: 950000,
    image: womenTee,
    colors: ["یاسی", "سفید"],
    sizes: ["S", "M", "L"],
    rating: 4.4,
    categories: ["women", "tshirt", "casual", "sale"],
  },
  {
    title: "کتانی ونس سفید",
    brand: "کارو استریت",
    price: 2280000,
    image: vansWhite,
    colors: ["سفید"],
    sizes: ["38", "39", "40", "41", "42", "43"],
    rating: 4.8,
    categories: ["men", "women", "shoes", "vans", "casual", "new"],
    isNew: true,
  },
  {
    title: "تیشرت بچگانه طرح دایناسور",
    brand: "کارو کیدز",
    price: 640000,
    oldPrice: 820000,
    image: kidsTee,
    colors: ["زرد"],
    sizes: ["4", "6", "8", "10"],
    rating: 4.6,
    categories: ["kids", "tshirt", "casual", "sale"],
  },
  {
    title: "شلوار جین بچگانه کمرکش",
    brand: "کارو کیدز",
    price: 890000,
    image: kidsJeans,
    colors: ["آبی"],
    sizes: ["4", "6", "8", "10", "12"],
    rating: 4.3,
    categories: ["kids", "jeans", "casual"],
  },
  {
    title: "کتانی بچگانه چسبی",
    brand: "کارو کیدز",
    price: 1350000,
    oldPrice: 1590000,
    image: kidsShoes,
    colors: ["آبی", "نارنجی"],
    sizes: ["28", "30", "32", "34"],
    rating: 4.7,
    categories: ["kids", "shoes", "sport", "sale", "new"],
    isNew: true,
  },
  {
    title: "تیشرت ورزشی زنانه سبک",
    brand: "کارو اسپرت",
    price: 920000,
    oldPrice: 1150000,
    image: womenSport,
    colors: ["سبز"],
    sizes: ["S", "M", "L"],
    rating: 4.5,
    categories: ["women", "sport", "tshirt", "sport-tshirt", "sale"],
  },
  {
    title: "پیراهن آکسفورد مردانه",
    brand: "کارو استودیو",
    price: 1680000,
    image: oxford,
    colors: ["آبی روشن"],
    sizes: ["M", "L", "XL"],
    rating: 4.6,
    categories: ["men", "shirt", "casual"],
  },
];

/** Real catalog — one row per product; adding items only appends here. */
export const products: Product[] = base.map((p, i) => ({ ...p, id: `p-${i}` }));

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
