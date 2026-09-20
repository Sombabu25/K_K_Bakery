import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

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

const phone = z
  .string()
  .trim()
  .regex(/^[0-9+\s-]{8,15}$/, { message: "Enter a valid mobile number" });

const orderSchema = z.object({
  customer_name: z.string().trim().min(2).max(80),
  phone,
  fulfilment: z.enum(["delivery", "pickup"]),
  address: z.string().trim().max(300).optional().nullable(),
  landmark: z.string().trim().max(150).optional().nullable(),
  scheduled_date: z.string().trim().max(20).optional().nullable(),
  scheduled_time: z.string().trim().max(20).optional().nullable(),
  notes: z.string().trim().max(500).optional().nullable(),
  items: z
    .array(
      z.object({
        id: z.string().max(80),
        name: z.string().max(120),
        price: z.number().nonnegative(),
        qty: z.number().int().positive().max(99),
        unit: z.string().max(40).nullable().optional(),
      }),
    )
    .min(1)
    .max(40),
  subtotal: z.number().nonnegative(),
  delivery_fee: z.number().nonnegative(),
  total: z.number().nonnegative(),
});

export const placeOrder = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => orderSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = publicClient();
    const { data: row, error } = await supabase
      .from("orders")
      .insert({
        customer_name: data.customer_name,
        phone: data.phone,
        fulfilment: data.fulfilment,
        address: data.address ?? null,
        landmark: data.landmark ?? null,
        scheduled_date: data.scheduled_date || null,
        scheduled_time: data.scheduled_time || null,
        notes: data.notes ?? null,
        items: data.items,
        subtotal: data.subtotal,
        delivery_fee: data.delivery_fee,
        total: data.total,
      })
      .select("order_number")
      .single();
    if (error) throw new Error(error.message);
    return { orderNumber: row.order_number as number };
  });

const customCakeSchema = z.object({
  customer_name: z.string().trim().min(2).max(80),
  phone,
  occasion: z.string().trim().max(40),
  flavour: z.string().trim().max(40),
  weight: z.string().trim().max(20),
  egg_preference: z.string().trim().max(20),
  cake_message: z.string().trim().max(160).optional().nullable(),
  reference_image_url: z.string().trim().max(500).optional().nullable(),
  fulfilment: z.enum(["delivery", "pickup"]),
  address: z.string().trim().max(300).optional().nullable(),
  needed_date: z.string().trim().max(20).optional().nullable(),
  needed_time: z.string().trim().max(20).optional().nullable(),
  notes: z.string().trim().max(500).optional().nullable(),
});

export const requestCustomCake = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => customCakeSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = publicClient();
    const { data: row, error } = await supabase
      .from("custom_cake_requests")
      .insert({
        ...data,
        cake_message: data.cake_message ?? null,
        reference_image_url: data.reference_image_url ?? null,
        address: data.address ?? null,
        needed_date: data.needed_date || null,
        needed_time: data.needed_time || null,
        notes: data.notes ?? null,
      })
      .select("request_number")
      .single();
    if (error) throw new Error(error.message);
    return { requestNumber: row.request_number as number };
  });
