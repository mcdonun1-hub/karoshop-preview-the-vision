import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/karoshop/site-header";
import { MobileTabBar } from "@/components/karoshop/mobile-tab-bar";
import { HeroSlider } from "@/components/karoshop/hero-slider";
import { CategoryNav } from "@/components/karoshop/category-nav";
import { ProductGrid } from "@/components/karoshop/product-grid";
import { SiteFooter } from "@/components/karoshop/site-footer";
import { productsByCategory } from "@/lib/karoshop-data";

const title = "کاروشاپ | فروشگاه لباس و کفش کژوال و اسپرت";
const description =
  "کاروشاپ؛ خرید آنلاین لباس مردانه، زنانه و بچگانه و کفش‌های کژوال و اسپرت با قیمت شفاف و ارسال سریع.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const newest = productsByCategory("new").slice(0, 10);
  const sale = productsByCategory("sale").slice(0, 10);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[1400px]">
        <h1 className="sr-only">کاروشاپ — فروشگاه آنلاین پوشاک و کفش کژوال و اسپرت</h1>
        <HeroSlider />
        <CategoryNav />
        <ProductGrid title="جدیدترین‌ها" products={newest} />
        <ProductGrid title="تخفیف‌های این هفته" products={sale} />
      </main>
      <SiteFooter />
      <MobileTabBar />
    </div>
  );
}
