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
};
