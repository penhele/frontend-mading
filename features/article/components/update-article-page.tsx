"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import UpdateArticleForm from "./update-article-form";

export default function UpdateArticlePage() {
  const params = useParams();
  const id = params.id as string;

  const router = useRouter();

  return (
    <div className="space-y-4">
      <Button onClick={() => router.back()} variant={"ghost"}>
        <ArrowLeft /> Kembali
      </Button>

      <div className="">
        <h1 className="text-xl font-bold">Perbarui Artikel</h1>
        <p className="text-sm text-muted-foreground">
          Kelola konten dan lihat pratinjau secara langsung sebelum diterbitkan.
        </p>
      </div>

      <Separator />

      <UpdateArticleForm id={id} />
    </div>
  );
}
