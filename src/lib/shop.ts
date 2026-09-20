import cakeRainbow from "@/assets/cake-rainbow.jpg";
import cakeKitty from "@/assets/cake-kitty.jpg";
import cakeCricket from "@/assets/cake-cricket.jpg";
import cakeAnniversary from "@/assets/cake-anniversary.jpg";
import cakeMatches from "@/assets/cake-matches.jpg";
import shopFront from "@/assets/shop-front.jpg";

export const SHOP_NAME = "K K Bakery";
export const PHONE = "8672223219";
export const PHONE_DISPLAY = "86722 23219";
export const WHATSAPP = "918672223219";

export const ADDRESS_LINES = [
  "2B, K K Bakery Building, Beside Revathi Theatre,",
  "PSR Road, Ramanaidupeta,",
  "Machilipatnam – 521001, Andhra Pradesh",
];

export const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "K K Bakery, Beside Revathi Theatre, PSR Road, Ramanaidupeta, Machilipatnam 521001, Andhra Pradesh",
  );

export const LISTING_URL =
  "https://www.justdial.com/Machilipatnam/K-K-Bakery-Beside-Revathi-Theatre-Ramanaidupeta/9999P8672-8672-140618212101-L1U4_BZDET";

export const DELIVERY_FEE = 40;

export const CATEGORIES = ["Cakes", "Puffs", "Pastries", "Breads", "Desserts"] as const;

export function rupees(value: number) {
  return "₹" + Math.round(value).toLocaleString("en-IN");
}

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const PRODUCT_IMAGES: Record<string, string> = {
  "cake-rainbow": cakeRainbow,
  "cake-kitty": cakeKitty,
  "cake-cricket": cakeCricket,
  "cake-anniversary": cakeAnniversary,
  "cake-matches": cakeMatches,
  "shop-front": shopFront,
};

export const GALLERY = [
  {
    src: cakeRainbow,
    alt: "Two-tier rainbow theme birthday cake with lion topper",
    tag: "Kids",
    flavour: "Chocolate",
  },
  {
    src: cakeKitty,
    alt: "Pink first-birthday cake with Hello Kitty topper",
    tag: "Birthday",
    flavour: "Pineapple",
  },
  {
    src: cakeCricket,
    alt: "Cricket pitch theme cake with bat and stumps",
    tag: "Theme",
    flavour: "Butterscotch",
  },
  {
    src: cakeAnniversary,
    alt: "White and gold 60th anniversary cake with roses",
    tag: "Anniversary",
    flavour: "Vanilla",
  },
  {
    src: cakeMatches,
    alt: "Matchbox theme fondant cake",
    tag: "Theme",
    flavour: "Chocolate",
  },
  {
    src: shopFront,
    alt: "K K Bakery shop on PSR Road, Ramanaidupeta",
    tag: "Shop",
    flavour: "",
  },
];

export const GALLERY_FILTERS = ["All", "Birthday", "Anniversary", "Kids", "Theme"];

export const REVIEWS = [
  {
    name: "Srinivas R.",
    text: "Ordered a birthday cake for my daughter — fresh, not too sweet, and ready exactly on time.",
    stars: 5,
  },
  {
    name: "Lakshmi P.",
    text: "Their puffs and plum cake are a Machilipatnam habit at this point. Always fresh in the evening.",
    stars: 5,
  },
  {
    name: "Anil K.",
    text: "Got an egg-less theme cake made from a photo. Came out very close to the reference.",
    stars: 4,
  },
];
