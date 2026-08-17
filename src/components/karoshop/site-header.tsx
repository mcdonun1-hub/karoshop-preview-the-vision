import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User } from "lucide-react";
import logoAsset from "@/assets/karoshop-logo.png.asset.json";

function SearchField({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute end-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        placeholder="جستجوی محصول، برند یا دسته…"
        className={
          "w-full rounded-full bg-surface pe-11 ps-4 text-sm outline-none ring-accent/50 transition placeholder:text-muted-foreground focus:ring-2 " +
          (compact ? "h-10" : "h-12")
        }
      />
    </div>
  );
}

export function SiteHeader() {
  const [showStickySearch, setShowStickySearch] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const marker = document.querySelector<HTMLElement>("[data-categories-end]");
      const threshold = marker
        ? marker.getBoundingClientRect().top + window.scrollY - 80
        : 600;
      setShowStickySearch(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <header className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-3 py-4 sm:px-6 sm:py-6">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
            <div className="flex items-center gap-1">
              <button
                aria-label="سبد خرید"
                className="grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                <ShoppingBag className="size-5" />
              </button>
              <button
                aria-label="حساب کاربری"
                className="grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                <User className="size-5" />
              </button>
            </div>

            <Link to="/" className="justify-self-center" aria-label="کاروشاپ">
              <img
                src={logoAsset.url}
                alt="کاروشاپ — Style Is You"
                width={520}
                height={200}
                className="h-14 w-auto object-contain sm:h-20"
              />
            </Link>

            <span className="size-10" aria-hidden />
          </div>

          <div className="mx-auto mt-4 w-full max-w-xl sm:mt-6">
            <SearchField />
          </div>
        </div>
      </header>

      {/* Sticky search: appears only after scrolling past the categories */}
      <div
        className={
          "fixed inset-x-0 top-0 z-40 border-b border-border bg-background/90 backdrop-blur transition-all duration-300 " +
          (showStickySearch
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0")
        }
      >
        <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-3 py-2.5 sm:px-6">
          <Link to="/" className="shrink-0" aria-label="کاروشاپ">
            <img
              src={logoAsset.url}
              alt="کاروشاپ"
              width={260}
              height={100}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <div className="min-w-0 flex-1">
            <SearchField compact />
          </div>
        </div>
      </div>
    </>
  );
}
