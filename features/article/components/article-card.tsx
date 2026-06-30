"use client";

import { Badge } from "@/components/ui/badge";
import { Article } from "../types/article";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/contants/routes";
import Image from "next/image";
import { getFormatDate } from "@/lib/utils/get-format-date";

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  const router = useRouter();

  return (
    <div
      className="space-y-2 hover:-translate-y-2 hover:-rotate-2 transition-all cursor-pointer"
      onClick={() => router.push(ROUTES.ARTICLE_DETAIL(article.slug))}
    >
      <div className="relative">
        {article.imageUrl ? (
          <div className="relative aspect-video rounded-lg">
            <Image
              src={article.imageUrl}
              alt={`${article.slug}-image`}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        ) : (
          <div className="bg-muted aspect-video rounded-lg" />
        )}

        <Badge variant={"outline"} className="absolute bg-card top-2 left-2">
          {article.category.name}
        </Badge>

        <Badge
          variant={"outline"}
          className="absolute bg-card right-2 bottom-2"
        >
          {getFormatDate(article.createdAt)}
        </Badge>
      </div>

      <div className="">
        <h1 className="font-semibold">{article.title}</h1>
        <p className="text-xs text-muted-foreground line-clamp-3">{article.content}</p>
      </div>
    </div>
  );
}
