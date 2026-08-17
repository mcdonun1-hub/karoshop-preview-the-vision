import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    kicker: "کالکشن مردانه",
    title: "کژوال، اما دقیق",
    text: "ست‌های روزمره با پارچه‌های سبک و رنگ‌های خنثی",
    cta: "خرید مردانه",
    slug: "men",
  },
  {
    image: hero2,
    kicker: "کالکشن زنانه",
    title: "بیسیک‌های همیشگی",
    text: "بافت، جین و پیراهن‌هایی که هر روز جواب می‌دهند",
    cta: "خرید زنانه",
    slug: "women",
  },
  {
    image: hero3,
    kicker: "اسنیکرز",
    title: "سبک‌تر قدم بردار",
    text: "کتانی‌های اسپرت و ونس با ارسال سریع",
    cta: "خرید کفش",
    slug: "shoes",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const go = useCallback((n: number) => setI((c) => (c + n + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  return (
    <section className="px-3 pt-3 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-surface">
        <div className="relative aspect-[4/5] sm:aspect-[21/9]">
          {slides.map((s, idx) => (
            <div
              key={s.slug}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                idx === i ? "opacity-100" : "opacity-0",
              )}
              aria-hidden={idx !== i}
            >
              <img
                src={s.image}
                alt={s.title}
                width={1920}
                height={1088}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent sm:bg-gradient-to-l sm:from-foreground/60 sm:via-foreground/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:justify-center sm:p-12 md:p-16">
                <span className="text-xs font-semibold tracking-widest text-background/80">
                  {s.kicker}
                </span>
                <h2 className="mt-2 max-w-md text-3xl font-black leading-tight text-background sm:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-2 max-w-sm text-sm text-background/85 sm:text-base">{s.text}</p>
                <Link
                  to="/category/$slug"
                  params={{ slug: s.slug }}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-bold text-foreground transition-transform hover:scale-[1.03] active:scale-95"
                >
                  {s.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 start-1/2 flex -translate-x-1/2 gap-1.5 sm:hidden">
          {slides.map((s, idx) => (
            <button
              key={s.slug}
              aria-label={`اسلاید ${idx + 1}`}
              onClick={() => setI(idx)}
              className={cn(
                "h-1.5 rounded-full bg-background/60 transition-all",
                idx === i ? "w-6 bg-background" : "w-1.5",
              )}
            />
          ))}
        </div>

        <div className="absolute bottom-6 end-6 hidden gap-2 sm:flex">
          <button
            aria-label="اسلاید قبلی"
            onClick={() => go(1)}
            className="grid size-10 place-items-center rounded-full bg-background/85 text-foreground backdrop-blur transition-colors hover:bg-background"
          >
            <ChevronRight className="size-5" />
          </button>
          <button
            aria-label="اسلاید بعدی"
            onClick={() => go(-1)}
            className="grid size-10 place-items-center rounded-full bg-background/85 text-foreground backdrop-blur transition-colors hover:bg-background"
          >
            <ChevronLeft className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
