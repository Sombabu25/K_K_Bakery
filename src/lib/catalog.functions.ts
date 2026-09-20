import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string | null;
  price: number;
  unit: string | null;
  is_eggless: boolean;
  is_bestseller: boolean;
  is_available: boolean;
  sort_order: number;
  image_key: string | null;
};

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export const listProducts = createServerFn({ method: "GET" }).handler(async (): Promise<Product[]> => {
  const supabase = publicClient();
  const { data, error } = await supabase
    .from("products")
    .select(
      "id, slug, name, category, description, price, unit, is_eggless, is_bestseller, is_available, sort_order, image_key",
    )
    .eq("is_available", true)
    .order("sort_order", { ascending: true });
  if (error) throw new Error(error.message);
  return (data ?? []).map((row) => ({ ...row, price: Number(row.price) }));
});

export const productQueryOptions = {
  queryKey: ["products"] as const,
  queryFn: () => listProducts(),
  staleTime: 60_000,
};
