import z, { infer as zodInfer } from "zod";

export const createArticleSchema = z.object({
  title: z.string().min(1),
  imageUrl: z.string().optional(),
  content: z.string().min(1),
  slug: z.string().min(1),
  status: z.string().min(1),
  userId: z.string().min(1),
  categoryId: z.any().transform(Number).pipe(z.number().min(1)),
});
export type ArticleFormValues = zodInfer<typeof createArticleSchema>;
