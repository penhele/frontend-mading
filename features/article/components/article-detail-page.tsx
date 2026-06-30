"use client";

import { useParams, useRouter } from "next/navigation";
import { useArticle } from "../hooks/use-article";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, User, BookOpen } from "lucide-react";
import Image from "next/image";
import { getFormatDate } from "@/lib/utils/get-format-date";

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const { data: article, isLoading, error } = useArticle(slug);

  if (isLoading) {
    return (
      <div className="space-y-6 max-w-3xl mx-auto px-4 py-8">
        <Skeleton className="h-9 w-24" />
        <div className="space-y-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-10 w-full" />
          <div className="flex gap-4">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-28" />
          </div>
        </div>
        <Skeleton className="aspect-video w-full rounded-xl" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 max-w-md mx-auto space-y-4">
        <div className="bg-destructive/10 p-3 rounded-full text-destructive">
          <BookOpen className="size-8" />
        </div>
        <h2 className="text-xl font-bold">Artikel Tidak Ditemukan</h2>
        <p className="text-sm text-muted-foreground">
          Artikel dengan tautan tersebut tidak dapat ditemukan atau telah dihapus.
        </p>
        <Button onClick={() => router.push("/")} variant="default">
          Kembali ke Beranda
        </Button>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <Button
        onClick={() => router.back()}
        variant="ghost"
        className="gap-2 -ml-2 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Kembali
      </Button>

      <div className="space-y-3">
        <Badge variant="outline" className="px-3 py-1 font-medium bg-muted/30">
          {article.category.name}
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
          {article.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <User className="size-4" />
            <span>{article.user.name}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="size-4" />
            <span>{getFormatDate(article.createdAt)}</span>
          </div>
        </div>
      </div>

      <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-sm border bg-muted">
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
            <BookOpen className="size-16 stroke-[1]" />
          </div>
        )}
      </div>

      <Separator className="my-2" />

      <div className="text-foreground leading-relaxed whitespace-pre-wrap text-base sm:text-lg max-w-none space-y-4">
        {article.content}
      </div>
    </article>
  );
}
