import { z, defineCollection } from "astro:content";

export const collections = {
  person: defineCollection({
    type: "content",
    schema: z.object({
      name: z.string(),
      fullName: z.string(),
      title: z.string(),
    }),
  }),
  feature: defineCollection({
    type: "content",
    schema: z.object({
      tagline: z.string(),
      order: z.number().positive(),
    }),
  }),
  virtue: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string(),
      order: z.number().positive(),
      details: z.array(z.string()).min(1),
    })
  }),
  offering: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      order: z.number().positive(),
    })
  })
};
