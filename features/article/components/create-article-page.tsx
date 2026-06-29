"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import CreateArticleForm from "./create-article-form";

export default function CreateArticlePage() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <Button onClick={() => router.back()} variant={"ghost"}>
        <ArrowLeft /> Kembali
      </Button>

      <div className="">
        <h1 className="text-xl font-bold">Tulis Artikel baru</h1>
        <p className="text-sm text-muted-foreground">
          Kelola konten dan lihat pratinjau secara langsung sebelum diterbitkan.
        </p>
      </div>

      <Separator />

      <CreateArticleForm />
    </div>
  );
}
