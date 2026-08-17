import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { SiteHeader } from "@/components/karoshop/site-header";
import { MobileTabBar } from "@/components/karoshop/mobile-tab-bar";
import { CategoryNav } from "@/components/karoshop/category-nav";
import { ProductGrid } from "@/components/karoshop/product-grid";
import { SiteFooter } from "@/components/karoshop/site-footer";
import { categories, productsByCategory } from "@/lib/karoshop-data";

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => {
    const c = categories.find((x) => x.slug === params.slug);
    const title = `${c?.title ?? "دسته‌بندی"} | کاروشاپ`;
    const description = `خرید ${c?.title ?? "محصولات"} در کاروشاپ با قیمت شفاف، تخفیف واقعی و ارسال سریع.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useParams();
  const category = categories.find((c) => c.slug === slug);
  const list = productsByCategory(slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[1400px]">
        <nav className="flex items-center gap-1.5 px-3 pt-4 text-xs text-muted-foreground sm:px-6">
          <Link to="/" className="hover:text-foreground">
            خانه
          </Link>
          <ChevronLeft className="size-3.5" />
          <span className="text-foreground">{category?.title ?? slug}</span>
        </nav>

        <h1 className="px-3 pt-2 text-2xl font-black sm:px-6 sm:text-3xl">
          {category?.title ?? "محصولات"}
        </h1>

        <CategoryNav active={slug} />

        {list.length > 0 ? (
          <ProductGrid title={`محصولات ${category?.title ?? ""}`} products={list} />
        ) : (
          <p className="px-3 pb-16 text-sm text-muted-foreground sm:px-6">
            هنوز محصولی در این دسته ثبت نشده است.
          </p>
        )}
      </main>
      <SiteFooter />
      <MobileTabBar />
    </div>
  );
}
