import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { categories, productsByCategory } from "@/lib/karoshop-data";
import { CategoryIcon } from "./category-icon";

/** Circular thumbnail per category, taken from the first product of that category. */
function categoryImage(slug: string) {
  return productsByCategory(slug)[0]?.image;
}

/**
 * Category system: a scroll rail on mobile, a wrapping circle row on desktop.
 * Adding dozens of categories/subcategories only grows the data array.
 */
export function CategoryNav({ active }: { active?: string }) {
  return (
    <section className="px-3 py-7 sm:px-6 sm:py-10">
      <div className="mb-5 flex items-baseline justify-between gap-3">
        <h2 className="text-lg font-black sm:text-2xl">دسته‌بندی‌ها</h2>
        <span className="text-xs text-muted-foreground">انتخاب سریع استایل</span>
      </div>

      <div className="-mx-3 flex gap-4 overflow-x-auto px-3 pb-1 no-scrollbar sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-6 sm:overflow-visible sm:px-0">
        {categories.map((c) => {
          const img = categoryImage(c.slug);
          return (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group flex w-[72px] shrink-0 flex-col items-center gap-2 sm:w-[92px]"
            >
              <span
                className={cn(
                  "grid size-[68px] place-items-center overflow-hidden rounded-full bg-surface text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-card sm:size-[84px]",
                  active === c.slug && "ring-2 ring-foreground ring-offset-2 ring-offset-background",
                )}
              >
                {img ? (
                  <img
                    src={img}
                    alt={c.title}
                    loading="lazy"
                    width={200}
                    height={200}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <CategoryIcon name={c.icon} className="size-6 text-foreground" />
                )}
              </span>
              <span className="w-full truncate text-center text-[12px] font-semibold sm:text-sm">
                {c.title}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
