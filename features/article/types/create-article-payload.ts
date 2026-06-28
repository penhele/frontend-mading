export interface CreateArticlePayload {
  title: string;
  imageUrl?: string;
  content: string;
  slug: string;
  status: string;
  userId: string;
  categoryId: number;
}
