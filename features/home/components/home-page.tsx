"use client";

import ArticleCard from "@/features/article/components/article-card";
import { useArticles } from "@/features/article/hooks/use-articles";

export default function HomePage() {
  const { data: articles = [] } = useArticles();

  return (
    <div className="space-y-4">
      <div className="">
        <h1>Halo Rekan DeSiWeM!</h1>
        <p className="text-muted-foreground text-xs">
          Selamat Datang di Kreativitas Tanpa Batas Digital
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
