import { createFileRoute } from "@tanstack/react-router";
import {
  Cake,
  Croissant,
  EggOff,
  Heart,
  MapPin,
  Phone,
  Star,
  Truck,
  CalendarClock,
  Cookie,
  Candy,
  ShoppingCart,
  Plus,
} from "lucide-react";

import cakeRainbow from "@/assets/cake-rainbow.jpg";
import cakeKitty from "@/assets/cake-kitty.jpg";
import cakeCricket from "@/assets/cake-cricket.jpg";
import cakeAnniversary from "@/assets/cake-anniversary.jpg";
import cakeMatches from "@/assets/cake-matches.jpg";
import shopFront from "@/assets/shop-front.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "K K Bakery — Custom Cakes & Fresh Bakes in Machilipatnam" },
      {
        name: "description",
        content:
          "K K Bakery, Ramanaidupeta, Machilipatnam. Custom birthday cakes, egg-less cakes, pastries, breads and plum cakes — baking beside Revathi Theatre since 1968. Open daily until 10 pm.",
      },
      {
        property: "og:title",
        content: "K K Bakery — Custom Cakes & Fresh Bakes in Machilipatnam",
      },
      {
        property: "og:description",
        content:
          "Custom birthday cakes, egg-less cakes, pastries and breads in Ramanaidupeta, Machilipatnam — since 1968. Open daily until 10 pm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "K K Bakery — Custom Cakes & Fresh Bakes in Machilipatnam",
      },
      {
        name: "twitter:description",
        content:
          "Custom birthday cakes, egg-less cakes, pastries and breads in Ramanaidupeta, Machilipatnam — since 1968.",
      },
    ],
  }),
  component: Index,
});

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "K K Bakery, Beside Revathi Theatre, PSR Road, Ramanaidupeta, Machilipatnam 521001, Andhra Pradesh",
  );
const LISTING_URL =
  "https://www.justdial.com/Machilipatnam/K-K-Bakery-Beside-Revathi-Theatre-Ramanaidupeta/9999P8672-8672-140618212101-L1U4_BZDET";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Menu", href: "#menu" },
  { label: "Custom Cakes", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Our Story", href: "#story" },
  { label: "Visit Us", href: "#visit" },
];

const BEST_SELLERS = [
  {
    name: "Black Forest Cake",
    price: "₹450",
    rating: 5,
    category: "Cake",
  },
  {
    name: "Chocolate Cake",
    price: "₹500",
    rating: 5,
    category: "Cake",
  },
  {
    name: "Chicken Puff",
    price: "₹31",
    rating: 0,
    category: "Puff",
  },
  {
    name: "Red Velvet Cake",
    price: "₹650",
    rating: 0,
    category: "Cake",
  },
];

const MENU = [
  {
    icon: Cake,
    title: "Cakes",
    copy: "Birthday • Theme • Eggless",
    link: "#menu",
  },
  {
    icon: Croissant,
    title: "Puffs",
    copy: "Veg • Egg • Paneer • Chicken",
    link: "#menu",
  },
  {
    icon: Cookie,
    title: "Pastries",
    copy: "Chocolate • Pineapple • Red Velvet",
    link: "#menu",
  },
  {
    icon: Candy,
    title: "Breads & Buns",
    copy: "Freshly baked daily",
    link: "#menu",
  },
];

const GALLERY = [
  { src: cakeRainbow, alt: "Two-tier rainbow theme birthday cake with lion topper" },
  { src: cakeKitty, alt: "Pink first-birthday cake with Hello Kitty topper" },
  { src: cakeCricket, alt: "Cricket pitch theme cake with bat and stumps" },
  { src: cakeAnniversary, alt: "White and gold 60th anniversary cake with roses" },
  { src: cakeMatches, alt: "Matchbox theme fondant cake" },
  { src: shopFront, alt: "K K Bakery shop on PSR Road, Ramanaidupeta" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <BestSellers />
        <Highlights />
        <MenuSection />
        <StorySection />
        <GallerySection />
        <VisitSection />
      </main>
      <SiteFooter />
      <FloatingCart />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-cream/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-xl font-bold tracking-tight text-cocoa">
          K K Bakery
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-cocoa"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#menu" className="btn-primary !px-5 !py-2.5">
          <ShoppingCart className="h-4 w-4" />
          Order Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-caramel/25 blur-3xl"
      />
      <div className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="eyebrow">Ramanaidupeta · Machilipatnam · Since 1968</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cocoa sm:text-5xl lg:text-6xl">
            Fresh bakes and custom cakes, made the K K way.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            For 58 years, families in Machilipatnam have celebrated with our cakes —
            birthday theme cakes, egg-less treats, fresh bread and pastries, baked
            fresh every day beside Revathi Theatre.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#menu" className="btn-primary">
              <ShoppingCart className="h-4 w-4" />
              Order Now
            </a>
            <a href="#menu" className="btn-outline">
              <Cake className="h-4 w-4" />
              Custom Cake
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="badge-pill">
              <Star className="h-3.5 w-3.5 fill-caramel text-caramel" />
              4.0 · 349 ratings
            </span>
            <span className="badge-pill">
              <Truck className="h-3.5 w-3.5" />
              Home Delivery
            </span>
            <span className="badge-pill">
              <Cake className="h-3.5 w-3.5" />
              Custom Cakes
            </span>
            <span className="badge-pill">
              <EggOff className="h-3.5 w-3.5" />
              Eggless Available
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-4xl shadow-xl ring-1 ring-border">
            <img
              src={cakeRainbow}
              alt="Custom two-tier rainbow birthday cake made at K K Bakery"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-2xl bg-card px-5 py-3 shadow-lg ring-1 ring-border">
            <p className="font-display text-lg font-semibold text-cocoa">58 years</p>
            <p className="text-xs text-muted-foreground">of baking in Machilipatnam</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BestSellers() {
  return (
    <section className="border-y border-border bg-cream-deep/60">
      <div className="container-page py-12">
        <div className="max-w-2xl">
          <span className="eyebrow">What everyone's ordering</span>
          <h2 className="section-title mt-3">Best Sellers</h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BEST_SELLERS.map((product) => (
            <div
              key={product.name}
              className="group flex flex-col rounded-3xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-caramel/20 text-cocoa">
                <Cake className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-semibold text-cocoa">{product.name}</h3>
              <p className="mt-1 text-lg font-bold text-cocoa">{product.price}</p>
              {product.rating > 0 && (
                <div className="mt-2 flex items-center gap-1">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-caramel text-caramel"
                    />
                  ))}
                </div>
              )}
              <div className="mt-auto pt-4">
                <button className="w-full rounded-full bg-cocoa px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-caramel-deep">
                  <Plus className="mr-2 h-4 w-4 inline" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="border-y border-border bg-cream-deep/60">
      <div className="container-page grid gap-6 py-8 sm:grid-cols-3">
        {[
          {
            icon: Cake,
            title: "Online cake booking",
            copy: "Reserve ahead for birthdays and functions",
          },
          {
            icon: Truck,
            title: "Home delivery",
            copy: "Cakes delivered fresh across the town",
          },
          {
            icon: EggOff,
            title: "Egg-less cakes",
            copy: "A full egg-less range, always available",
          },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-caramel/25 text-cocoa">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-cocoa">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">What we bake</span>
          <h2 className="section-title mt-3">From celebration cakes to everyday bakes</h2>
          <p className="mt-4 text-muted-foreground">
            Walk in for fresh bread and pastries, or book a custom cake for the big day.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MENU.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="group block rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-caramel/20 text-cocoa transition-colors group-hover:bg-cocoa group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-cocoa">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              <p className="mt-4 text-sm font-semibold text-caramel-deep group-hover:text-cocoa">
                Shop {item.title} →
              </p>
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Planning a cake? Call or WhatsApp us through our{" "}
          <a
            href={LISTING_URL}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-caramel-deep underline underline-offset-4 hover:text-cocoa"
          >
            listing page
          </a>{" "}
          to place your order.
        </p>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="bg-cream-deep/60 py-20">
      <div className="container-page grid items-center gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-4xl shadow-lg ring-1 ring-border">
          <img
            src={shopFront}
            alt="K K Bakery building on PSR Road beside Revathi Theatre, Ramanaidupeta"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <span className="eyebrow">Our story</span>
          <h2 className="section-title mt-3">A Machilipatnam favourite since 1968</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            K K Bakery opened its doors beside Revathi Theatre on PSR Road, and the
            neighbourhood has been coming back ever since — for morning bread,
            evening pastries, and the cakes that mark every birthday, wedding and
            festival in the family.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Three generations later, we still bake the way we always have: fresh
            every day, with egg-less options for every cake we make.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { value: "58", label: "years in business" },
              { value: "4.0★", label: "349 ratings" },
              { value: "10 pm", label: "open every day till" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-card p-4 text-center shadow-sm ring-1 ring-border">
                <p className="font-display text-2xl font-semibold text-cocoa">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Gallery</span>
          <h2 className="section-title mt-3">Cakes we've made for celebrations</h2>
          <p className="mt-4 text-muted-foreground">
            Real cakes, made for real customers at our Ramanaidupeta bakery.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY.map((photo) => (
            <div
              key={photo.alt}
              className="group overflow-hidden rounded-3xl shadow-sm ring-1 ring-border transition-shadow hover:shadow-lg"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisitSection() {
  return (
    <section id="visit" className="pb-20">
      <div className="container-page">
        <div className="overflow-hidden rounded-4xl bg-cocoa text-primary-foreground shadow-xl">
          <div className="grid gap-10 p-8 sm:p-12 md:grid-cols-2">
            <div>
              <span className="eyebrow !text-caramel">Visit us</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Come by the shop
              </h2>
              <p className="mt-5 leading-relaxed text-primary-foreground/80">
                2B, K K Bakery Building, Beside Revathi Theatre,
                <br />
                PSR Road, Ramanaidupeta,
                <br />
                Machilipatnam – 521001, Andhra Pradesh
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-cocoa shadow-sm transition-all hover:bg-primary-foreground hover:shadow-md"
                >
                  <MapPin className="h-4 w-4" />
                  Get directions
                </a>
                <a
                  href={LISTING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  <Phone className="h-4 w-4" />
                  Call us
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div className="rounded-2xl bg-cocoa-soft/40 p-5 ring-1 ring-primary-foreground/15">
                <p className="text-sm font-semibold text-caramel">Opening hours</p>
                <p className="mt-1 text-lg font-semibold">Open every day</p>
                <p className="text-sm text-primary-foreground/75">Until 10:00 pm</p>
              </div>
              <div className="rounded-2xl bg-cocoa-soft/40 p-5 ring-1 ring-primary-foreground/15">
                <p className="text-sm font-semibold text-caramel">Good to know</p>
                <p className="mt-1 text-sm text-primary-foreground/85">
                  Home delivery available · Online cake booking · Egg-less cakes on
                  request
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCart() {
  return (
    <>
      {/* Desktop floating cart */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <div className="rounded-2xl bg-cocoa px-6 py-4 shadow-xl ring-1 ring-border">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-primary-foreground">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-semibold">0 items</span>
            </div>
            <div className="h-6 w-px bg-primary-foreground/30" />
            <span className="font-display text-lg font-bold text-primary-foreground">₹0</span>
          </div>
          <button className="mt-3 w-full rounded-full bg-caramel px-4 py-2 text-sm font-semibold text-cocoa transition-colors hover:bg-primary-foreground">
            View Cart →
          </button>
        </div>
      </div>
      {/* Mobile bottom bar cart */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="border-t border-border bg-cocoa px-4 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-primary-foreground">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-semibold">0 items</span>
            </div>
            <span className="font-display text-lg font-bold text-primary-foreground">₹0</span>
            <button className="rounded-full bg-caramel px-4 py-2 text-sm font-semibold text-cocoa transition-colors hover:bg-primary-foreground">
              View Cart →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream-deep/60 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-lg font-bold text-cocoa">K K Bakery</p>
          <p className="text-sm text-muted-foreground">
            Beside Revathi Theatre, PSR Road, Ramanaidupeta, Machilipatnam
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          Baking in Machilipatnam since 1968 · Open daily until 10 pm
        </p>
      </div>
    </footer>
  );
}
