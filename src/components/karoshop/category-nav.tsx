import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/karoshop-data";

/**
 * Category system: a scroll rail on mobile, a wrapping tile grid on desktop.
 * Adding dozens of categories/subcategories only grows the data array.
 */
export function CategoryNav({ active }: { active?: string }) {
  return (
    <section className="px-3 py-6 sm:px-6 sm:py-10">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h2 className="text-lg font-black sm:text-2xl">دسته‌بندی‌ها</h2>
        <span className="text-xs text-muted-foreground">انتخاب سریع استایل</span>
      </div>

      {/* Mobile: horizontal touch rail */}
      <div className="-mx-3 flex gap-2.5 overflow-x-auto px-3 pb-1 no-scrollbar sm:hidden">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to="/category/$slug"
            params={{ slug: c.slug }}
            className={cn(
              "flex w-[76px] shrink-0 flex-col items-center gap-2 rounded-2xl bg-card p-2.5 shadow-card active:scale-95",
              active === c.slug && "ring-2 ring-accent",
            )}
          >
            <span className="grid size-12 place-items-center rounded-xl bg-surface text-xl">
              {c.emoji}
            </span>
            <span className="w-full truncate text-center text-[11px] font-semibold">{c.title}</span>
          </Link>
        ))}
      </div>

      {/* Desktop: dense tile grid */}
      <div className="hidden grid-cols-4 gap-3 sm:grid md:grid-cols-6 lg:grid-cols-7">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to="/category/$slug"
            params={{ slug: c.slug }}
            className={cn(
              "group flex items-center gap-3 rounded-2xl bg-card p-3 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift",
              active === c.slug && "ring-2 ring-accent",
            )}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface text-lg transition-colors group-hover:bg-accent/10">
              {c.emoji}
            </span>
            <span className="min-w-0 truncate text-sm font-semibold">{c.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
