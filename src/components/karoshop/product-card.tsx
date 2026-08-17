import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { discountPercent, formatPrice, type Product } from "@/lib/karoshop-data";

type Props = { product: Product; variant?: "desktop" | "mobile" };

/**
 * Compact product card. `variant` keeps mobile and desktop as two distinct
 * designs sharing one data contract (ready for a future native app).
 */
export function ProductCard({ product, variant = "desktop" }: Props) {
  const [wished, setWished] = useState(false);
  const off = discountPercent(product);
  const mobile = variant === "mobile";

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[20px] bg-card text-card-foreground shadow-card transition-all duration-300",
        !mobile && "hover:-translate-y-1 hover:shadow-lift",
      )}
    >
      <div className="relative overflow-hidden bg-surface">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          width={900}
          height={1100}
          className={cn(
            "w-full object-cover transition-transform duration-500",
            mobile ? "aspect-[4/5]" : "aspect-[4/5] group-hover:scale-[1.06]",
          )}
        />

        <div className="absolute start-2 top-2 flex flex-col gap-1">
          {off !== null && (
            <span className="rounded-full bg-foreground px-2 py-0.5 text-[11px] font-bold text-background price-num">
              ٪{formatPrice(off)}
            </span>
          )}
          {product.isNew && (
            <span className="rounded-full border border-foreground/15 bg-background/90 px-2 py-0.5 text-[11px] font-semibold text-foreground backdrop-blur">
              جدید
            </span>
          )}
        </div>

        <button
          type="button"
          aria-label="افزودن به علاقه‌مندی"
          aria-pressed={wished}
          onClick={() => setWished((v) => !v)}
          className={cn(
            "absolute end-2 top-2 grid size-8 place-items-center rounded-full bg-card/85 backdrop-blur transition-colors",
            wished ? "text-sale" : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Heart className={cn("size-4", wished && "fill-current")} />
        </button>

        {!mobile && (
          <button
            type="button"
            className="absolute inset-x-2 bottom-2 flex translate-y-3 items-center justify-center gap-2 rounded-xl bg-primary py-2 text-xs font-semibold text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ShoppingBag className="size-4" />
            افزودن به سبد
          </button>
        )}
      </div>

      <div className={cn("flex flex-1 flex-col gap-1", mobile ? "p-2.5" : "p-3")}>
        <div className="flex min-w-0 items-center justify-between gap-2">
          <span className="truncate text-[11px] text-muted-foreground">{product.brand}</span>
          <span className="flex shrink-0 items-center gap-0.5 text-[11px] text-muted-foreground price-num">
            <Star className="size-3 fill-accent text-accent" />
            {product.rating.toLocaleString("fa-IR")}
          </span>
        </div>

        <h3 className={cn("truncate font-semibold", mobile ? "text-[13px]" : "text-sm")}>
          {product.title}
        </h3>

        <div className="mt-auto flex items-end justify-between gap-2 pt-1.5">
          <div className="min-w-0">
            {product.oldPrice && (
              <div className="text-[11px] text-muted-foreground line-through price-num">
                {formatPrice(product.oldPrice)}
              </div>
            )}
            <div className={cn("font-bold price-num", mobile ? "text-[13px]" : "text-sm")}>
              {formatPrice(product.price)}
              <span className="ms-1 text-[10px] font-normal text-muted-foreground">تومان</span>
            </div>
          </div>
          {mobile && (
            <button
              type="button"
              aria-label="افزودن به سبد"
              className="grid size-8 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground active:scale-95"
            >
              <ShoppingBag className="size-4" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
