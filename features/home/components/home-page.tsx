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
      <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md px-6 py-10 md:px-10 md:py-14 shadow-lg">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-primary/15 blur-3xl opacity-60 dark:bg-primary/10" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-blue-500/10 blur-3xl opacity-50 dark:bg-blue-500/5" />

        <div className="relative z-10 space-y-4 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Ruang Kreativitas Digital
          </span>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent leading-[1.1]">
            Halo Rekan DeSiWeM! 👋
          </h1>
          
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Siap tuangkan ide hari ini? Selamat datang di ruang kreativitas tanpa batas digitalmu! Bagikan tulisan, cari info mading, dan temukan inspirasi menarik di sini.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border/10">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">{publishedArticles.length}</span>
              <span className="text-xs text-muted-foreground">Artikel Terbit</span>
            </div>
            <div className="h-8 w-px bg-border/40" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">{categories.length}</span>
              <span className="text-xs text-muted-foreground">Kategori</span>
            </div>
          </div>
        </div>
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

      <CategoryBarChart categories={categories} articles={publishedArticles} />
    </div>
  );
}
