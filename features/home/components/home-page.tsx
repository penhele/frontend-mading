"use client";

import ArticleCard from "@/features/article/components/article-card";
import { useArticles } from "@/features/article/hooks/use-articles";
import { useCategories } from "@/features/category/hooks/use-categories";
import CategoryBarChart from "@/features/dashboard/components/category-bar-chart";

export default function HomePage() {
  const { data: articles = [] } = useArticles();
  const { data: categories = [] } = useCategories();

  const publishedArticles = articles.filter(
    (article) => article.status === "PUBLISHED",
  );

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        {" "}
        {/* Memperkecil jarak vertikal antara judul dan subjudul */}
        <h1 className="text-2xl font-bold tracking-tight">
          Halo Rekan DeSiWeM! 👋
        </h1>
        <p className="text-muted-foreground text-sm">
          Siap tuangkan ide hari ini? Selamat datang di ruang kreativitas tanpa
          batas digitalmu!
        </p>
      </div>

      <div className="relative left-1/2 overflow-hidden -translate-x-1/2 w-screen bg-card">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="pointer-events-none absolute -top-32 right-[5%] h-96 w-96 rounded-full bg-primary/8 dark:bg-primary/4 blur-3xl opacity-80" />
        <div className="pointer-events-none absolute -bottom-32 left-[5%] h-96 w-96 rounded-full bg-blue-500/8 dark:bg-blue-500/4 blur-3xl opacity-80" />

        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 py-8">
          {publishedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      <CategoryBarChart categories={categories} />
    </div>
  );
}
