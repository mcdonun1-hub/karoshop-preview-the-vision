import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { categories } from "@/lib/karoshop-data";

const quickLinks = ["men", "women", "kids", "shoes", "sale"] as const;

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      {/* Desktop */}
      <div className="mx-auto hidden max-w-[1400px] items-center gap-6 px-6 py-4 sm:flex">
        <Link to="/" className="shrink-0">
          <span className="text-2xl font-black tracking-tight">
            کارو<span className="text-accent">شاپ</span>
          </span>
        </Link>

        <nav className="flex shrink-0 items-center gap-5 text-sm font-semibold">
          {quickLinks.map((slug) => {
            const c = categories.find((x) => x.slug === slug)!;
            return (
              <Link
                key={slug}
                to="/category/$slug"
                params={{ slug }}
                className="text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {c.title}
              </Link>
            );
          })}
        </nav>

        <div className="relative min-w-0 flex-1">
          <Search className="pointer-events-none absolute end-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="جستجوی محصول، برند یا دسته…"
            className="h-11 w-full rounded-full bg-surface pe-11 ps-4 text-sm outline-none ring-accent/50 transition placeholder:text-muted-foreground focus:ring-2"
          />
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {[
            { icon: Heart, label: "علاقه‌مندی‌ها" },
            { icon: User, label: "حساب کاربری" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              <Icon className="size-5" />
            </button>
          ))}
          <button className="ms-1 flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground">
            <ShoppingBag className="size-4" />
            سبد خرید
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-3 py-3">
          <button
            aria-label="منو"
            onClick={() => setOpenMenu(true)}
            className="grid size-9 place-items-center rounded-xl bg-surface"
          >
            <Menu className="size-5" />
          </button>
          <Link to="/" className="justify-self-center text-lg font-black">
            کارو<span className="text-accent">شاپ</span>
          </Link>
          <button
            aria-label="سبد خرید"
            className="relative grid size-9 place-items-center rounded-xl bg-surface"
          >
            <ShoppingBag className="size-5" />
            <span className="absolute -end-1 -top-1 grid size-4 place-items-center rounded-full bg-sale text-[10px] font-bold text-sale-foreground price-num">
              ۲
            </span>
          </button>
        </div>
        <div className="px-3 pb-3">
          <div className="relative">
            <Search className="pointer-events-none absolute end-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="دنبال چی می‌گردی؟"
              className="h-11 w-full rounded-2xl bg-surface pe-10 ps-4 text-sm outline-none ring-accent/50 focus:ring-2"
            />
          </div>
        </div>
      </div>

      {openMenu && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <button
            aria-label="بستن"
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setOpenMenu(false)}
          />
          <div className="absolute inset-y-0 end-0 w-[82%] max-w-xs overflow-y-auto bg-background p-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-black">همه دسته‌ها</span>
              <button
                aria-label="بستن منو"
                onClick={() => setOpenMenu(false)}
                className="grid size-9 place-items-center rounded-xl bg-surface"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="mt-4 flex flex-col">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setOpenMenu(false)}
                  className="flex items-center gap-3 border-b border-border py-3 text-sm font-semibold"
                >
                  <span className="grid size-9 place-items-center rounded-xl bg-surface">
                    {c.emoji}
                  </span>
                  {c.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
