import { useMemo, useState } from "react";
import { ArrowDownUp, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import type { Product } from "@/lib/karoshop-data";

const sorts = [
  { key: "new", label: "جدیدترین" },
  { key: "cheap", label: "ارزان‌ترین" },
  { key: "expensive", label: "گران‌ترین" },
  { key: "off", label: "بیشترین تخفیف" },
] as const;

type SortKey = (typeof sorts)[number]["key"];

export function ProductGrid({
  title,
  products,
  subtitle,
}: {
  title: string;
  products: Product[];
  subtitle?: string;
}) {
  const [sort, setSort] = useState<SortKey>("new");
  const [onlyDiscount, setOnlyDiscount] = useState(false);
  const [sheet, setSheet] = useState(false);

  const list = useMemo(() => {
    let out = onlyDiscount ? products.filter((p) => p.oldPrice) : [...products];
    if (sort === "cheap") out = out.sort((a, b) => a.price - b.price);
    if (sort === "expensive") out = out.sort((a, b) => b.price - a.price);
    if (sort === "off")
      out = out.sort(
        (a, b) => (b.oldPrice ? b.oldPrice - b.price : 0) - (a.oldPrice ? a.oldPrice - a.price : 0),
      );
    return out;
  }, [products, sort, onlyDiscount]);

  return (
    <section className="px-3 pb-10 sm:px-6">
      <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:justify-between">
        <div className="min-w-0">
          <h2 className="truncate text-lg font-black sm:text-2xl">{title}</h2>
          <p className="text-xs text-muted-foreground price-num">
            {subtitle ?? `${list.length.toLocaleString("fa-IR")} محصول`}
          </p>
        </div>

        {/* Desktop toolbar */}
        <div className="hidden items-center gap-2 sm:flex">
          <button
            onClick={() => setOnlyDiscount((v) => !v)}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              onlyDiscount
                ? "bg-primary text-primary-foreground"
                : "bg-surface text-muted-foreground hover:text-foreground",
            )}
          >
            <SlidersHorizontal className="size-4" />
            فقط تخفیف‌دار
          </button>
          {sorts.map((s) => (
            <button
              key={s.key}
              onClick={() => setSort(s.key)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                sort === s.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface text-muted-foreground hover:text-foreground",
              )}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Mobile filter trigger */}
        <button
          onClick={() => setSheet(true)}
          className="flex items-center gap-1.5 rounded-xl bg-surface px-3 py-2 text-xs font-semibold sm:hidden"
        >
          <ArrowDownUp className="size-4" />
          فیلتر و ترتیب
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:hidden">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} variant="mobile" />
        ))}
      </div>

      <div className="hidden gap-4 sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Mobile bottom sheet */}
      {sheet && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <button
            aria-label="بستن"
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setSheet(false)}
          />
          <div className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-background p-4 pb-8">
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-border" />
            <div className="flex items-center justify-between">
              <span className="font-black">فیلتر و مرتب‌سازی</span>
              <button
                aria-label="بستن فیلتر"
                onClick={() => setSheet(false)}
                className="grid size-8 place-items-center rounded-xl bg-surface"
              >
                <X className="size-4" />
              </button>
            </div>

            <p className="mt-5 mb-2 text-xs font-semibold text-muted-foreground">مرتب‌سازی</p>
            <div className="flex flex-wrap gap-2">
              {sorts.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setSort(s.key)}
                  className={cn(
                    "rounded-xl px-3 py-2 text-xs font-semibold",
                    sort === s.key ? "bg-primary text-primary-foreground" : "bg-surface",
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <p className="mt-5 mb-2 text-xs font-semibold text-muted-foreground">فیلتر</p>
            <button
              onClick={() => setOnlyDiscount((v) => !v)}
              className={cn(
                "w-full rounded-xl px-3 py-3 text-xs font-semibold",
                onlyDiscount ? "bg-primary text-primary-foreground" : "bg-surface",
              )}
            >
              فقط محصولات تخفیف‌دار
            </button>

            <button
              onClick={() => setSheet(false)}
              className="mt-5 w-full rounded-2xl bg-accent py-3 text-sm font-bold text-accent-foreground"
            >
              نمایش نتایج
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
