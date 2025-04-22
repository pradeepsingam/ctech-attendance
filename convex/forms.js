import { mutation, query } from 'convex/serve';
import { v } from 'convex/values';
import QRCode from 'qrcode';

export const submitForm = mutation({
  args: {
    fullname: v.string(),
    email: v.string(),
    address: v.string(),
    mobile: v.string(),
    whatsapp: v.string(),
    dob: v.string(),
    method: v.string(),
    paid: v.boolean(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert('forms', { ...args });
    return id;
  },
});

export const markAsPaid = mutation({
  args: { id: v.id('forms') },
  handler: async (ctx, args) => {
    const token = Math.random().toString(36).substring(2);
    const qr = await QRCode.toDataURL(token);
    await ctx.db.patch(args.id, { paid: true, qrToken: token, qr });
  },
});

export const verifyToken = query({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('forms')
      .filter((q) => q.eq(q.field('qrToken'), args.token))
      .unique();
  },
});
