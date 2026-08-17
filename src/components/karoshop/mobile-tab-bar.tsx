import { Link } from "@tanstack/react-router";
import { Heart, Home, LayoutGrid, User } from "lucide-react";

export function MobileTabBar() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur sm:hidden">
      <ul className="grid grid-cols-4">
        <li>
          <Link
            to="/"
            className="flex flex-col items-center gap-1 py-2.5 text-[11px] text-muted-foreground"
            activeProps={{ className: "text-foreground" }}
            activeOptions={{ exact: true }}
          >
            <Home className="size-5" />
            خانه
          </Link>
        </li>
        <li>
          <Link
            to="/category/$slug"
            params={{ slug: "new" }}
            className="flex flex-col items-center gap-1 py-2.5 text-[11px] text-muted-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            <LayoutGrid className="size-5" />
            دسته‌ها
          </Link>
        </li>
        <li>
          <button className="flex w-full flex-col items-center gap-1 py-2.5 text-[11px] text-muted-foreground">
            <Heart className="size-5" />
            علاقه‌مندی
          </button>
        </li>
        <li>
          <button className="flex w-full flex-col items-center gap-1 py-2.5 text-[11px] text-muted-foreground">
            <User className="size-5" />
            حساب
          </button>
        </li>
      </ul>
    </nav>
  );
}
