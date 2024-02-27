import { v } from "convex/values";

import { mutation } from "./_generated/server";

const images = [
  "/board-banners/1.svg",
  "/board-banners/2.svg",
  "/board-banners/3.svg",
  "/board-banners/4.svg",
  "/board-banners/5.svg",
  "/board-banners/6.svg",
  "/board-banners/7.svg",
  "/board-banners/8.svg",
  "/board-banners/9.svg",
  "/board-banners/10.svg",
];

export const createNewBoard = mutation({
  args: {
    title: v.string(),
    orgId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("unAuthorized");
    }

    const banner = images[Math.floor(Math.random() * images.length)];

    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: banner,
    });

    return board;
  },
});
