import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values"; // <-- this is important!

export default defineSchema({
  forms: defineTable({
    fullname: v.string(),
    email: v.string(),
    address: v.string(),
    mobile: v.string(),
    whatsapp: v.string(),
    dob: v.string(),
    method: v.string(),
    paid: v.boolean(),
    qrToken: v.optional(v.string()),
    qr: v.optional(v.string()),
  }),
});
