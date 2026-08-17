# KaroShop Preview: The Vision

KaroShop — Step 1: Visual Preview & UI Architecture

قبل از شروع هرگونه Backend، Database یا پیاده‌سازی کامل، ابتدا یک Visual Preview حرفه‌ای و قابل مشاهده از فروشگاه KaroShop ایجاد کن.

هدف این مرحله فقط مشخص‌کردن ظاهر، Layout، UI/UX و ساختار بصری پروژه است.

Brand

نام فروشگاه:

KaroShop

فروشگاه آنلاین لباس‌های مردانه، زنانه و بچگانه و کفش‌های جذاب، با تمرکز روی استایل Casual و Sport.

Design Direction

کاملاً RTL

طراحی Modern / Premium / Minimal

Typography بسیار حرفه‌ای و مدرن

استفاده از فونت فارسی Beirut

Mobile-First

Responsive واقعی

UI دسکتاپ و موبایل نباید صرفاً نسخه کوچک‌شده یکدیگر باشند.

نسخه Mobile Web باید UI مستقل و بسیار حرفه‌ای داشته باشد.

طراحی باید تمیز، سریع، خلوت و فروشگاهی باشد.

از UIهای قدیمی فروشگاه‌های اینترنتی استفاده نکن.

کارت محصولات کوچک، استاندارد و بسیار جذاب باشند.

در دسکتاپ حدود 4 تا 5 کارت محصول در هر ردیف نمایش داده شود.

صفحه اصلی

در ابتدای صفحه:

Logo / Brand:
KaroShop

یک Hero Slider بسیار حرفه‌ای و مرتبط با Fashion / Casual / Sneakers

بلافاصله زیر Slider، سیستم دسته‌بندی‌ها قرار بگیرد.

ساختار دسته‌بندی از نظر حس بصری از Reference Image ارائه‌شده الهام بگیرد، اما عیناً کپی نشود.

دسته‌ها باید مرتب، مدرن، قابل لمس و کاملاً Responsive باشند.

نمونه دسته‌ها:

مردانه

زنانه

بچگانه

کژوال

اسپرت

جین

پیراهن

تیشرت

تیشرت ورزشی

کفش

ونس

جدیدترین‌ها

تخفیف‌ها

ساختار باید طوری طراحی شود که در آینده تعداد زیادی دسته و زیردسته بدون خراب‌شدن UI قابل اضافه‌شدن باشد.

Product Interaction

وقتی کاربر روی هر دسته کلیک می‌کند:

فقط محصولات همان دسته نمایش داده شوند.

نمایش محصولات سریع باشد.

محصولات در کارت‌های حرفه‌ای قرار بگیرند.

تصویر، نام، قیمت، تخفیف و اطلاعات ضروری محصول به‌صورت واضح نمایش داده شود.

ساختار برای تعداد بسیار زیاد محصولات آماده باشد.

فیلتر و مرتب‌سازی در همین ساختار قابل اضافه‌شدن باشد.

Product Card

Product Card یکی از مهم‌ترین اجزای طراحی است.

کارت باید:

Compact باشد.

Tall و بیش از حد بزرگ نباشد.

تصویر محصول را بسیار خوب نمایش دهد.

قیمت و تخفیف کاملاً خوانا باشد.

Hover / Touch Interaction مناسب داشته باشد.

Wishlist قابل اضافه‌شدن باشد.

برای Mobile و Desktop طراحی متفاوت و بهینه داشته باشد.

Mobile Web

نسخه موبایل را جداگانه طراحی کن.

Mobile Web نباید Desktop UI کوچک‌شده باشد.

برای موبایل:

Navigation مناسب Touch

دسته‌بندی قابل اسکرول

Search بسیار در دسترس

Product Grid مناسب موبایل

Filter به‌صورت Bottom Sheet / Drawer در صورت مناسب بودن

Product Card مخصوص موبایل

فضای خالی و Typography استاندارد

تعاملات سریع و مدرن

در آینده قرار است یک Mobile App مستقل نیز ساخته شود؛ بنابراین ساختار UI و Componentها باید قابل توسعه باشند.

Reference

از تصاویر Reference که در اختیار تو قرار گرفته برای درک سبک ساختار Category Navigation استفاده کن.

Reference را کپی نکن؛ یک طراحی اختصاصی و حرفه‌ای برای KaroShop ایجاد کن.

مهم

در این مرحله:

کدنویسی کامل Backend، Database، Authentication، Payment و API را شروع نکن.

ابتدا فقط:

Visual Preview

Homepage Layout

Desktop UI

Mobile UI

Category Navigation

Product Card

Search Area

Filter Area

Overall Design System

را نمایش بده.

بعد از ایجاد Preview، ساختار پیشنهادی معماری را مختصر و واضح ارائه کن تا قبل از ورود به مرحله توسعه Laravel، ساختار پروژه تأیید شود.

هدف نهایی

این Preview باید نشان دهد که KaroShop قرار است یک فروشگاه اینترنتی Premium، Modern، Fast، Mobile-First و قابل توسعه باشد؛ نه یک Template فروشگاهی معمولی.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/be792bed-6027-48fa-84b0-249157375da2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
