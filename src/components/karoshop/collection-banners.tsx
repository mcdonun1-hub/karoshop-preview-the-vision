import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { productsByCategory } from "@/lib/karoshop-data";

const banners = [
  {
    slug: "sport",
    kicker: "کالکشن اسپرت",
    title: "برای تمرین و خیابان",
    text: "تیشرت‌های تنفس‌پذیر و کتانی‌های سبک",
  },
  {
    slug: "kids",
    kicker: "کارو کیدز",
    title: "کوچک‌ها، خوش‌تیپ‌تر",
    text: "لباس و کفش بادوام برای بازی هر روز",
  },
  {
    slug: "jeans",
    kicker: "کارو دنیم",
    title: "جینی که فرم می‌ماند",
    text: "راسته، مام‌فیت و کمرکش — برای همه",
  },
  {
    slug: "vans",
    kicker: "استریت‌ استایل",
    title: "کلاسیک‌های ونس",
    text: "مشکی و سفید؛ با هر استایلی ست می‌شود",
  },
] as const;

/**
 * Editorial collection banners. Same foundation as product cards
 * (rounded-[20px], bg-card, shadow-card) — images come from the catalog itself,
 * so new categories get a banner by only adding a row here.
 */
export function CollectionBanners() {
  return (
    <section className="px-3 pb-10 sm:px-6">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h2 className="text-lg font-black sm:text-2xl">کالکشن‌های کاروشاپ</h2>
        <span className="text-xs text-muted-foreground">برای هر سبک، یک قفسه</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
        {banners.map((b) => {
          const img = productsByCategory(b.slug)[0]?.image;
          return (
            <Link
              key={b.slug}
              to="/category/$slug"
              params={{ slug: b.slug }}
              className="group relative flex flex-col overflow-hidden rounded-[20px] bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative overflow-hidden bg-surface">
                {img && (
                  <img
                    src={img}
                    alt={b.title}
                    loading="lazy"
                    width={900}
                    height={700}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                )}
                <span className="absolute start-2 top-2 rounded-full border border-foreground/15 bg-background/90 px-2 py-0.5 text-[11px] font-semibold text-foreground backdrop-blur">
                  {b.kicker}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-1 p-3">
                <h3 className="text-sm font-black sm:text-base">{b.title}</h3>
                <p className="line-clamp-2 text-[11px] leading-5 text-muted-foreground sm:text-xs">
                  {b.text}
                </p>
                <span className="mt-auto flex items-center gap-1 pt-1 text-[11px] font-bold text-foreground sm:text-xs">
                  مشاهده کالکشن
                  <ChevronLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
