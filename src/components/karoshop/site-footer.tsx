export function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-border bg-surface px-3 py-8 pb-24 sm:px-6 sm:pb-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xl font-black">
          کارو<span className="text-accent">شاپ</span>
        </span>
        <p className="max-w-sm text-xs leading-6 text-muted-foreground">
          پوشاک و کفش مردانه، زنانه و بچگانه با تمرکز روی استایل کژوال و اسپرت. ارسال سریع، تعویض
          آسان.
        </p>
      </div>
    </footer>
  );
}
