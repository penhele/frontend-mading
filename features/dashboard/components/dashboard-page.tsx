"use client";

import { DataTable } from "@/components/data-table";
import { articleColumns } from "@/features/article/components/article-columns";
import { useArticles } from "@/features/article/hooks/use-articles";
import StatsCard from "./stats-card";
import { useCategories } from "@/features/category/hooks/use-categories";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/contants/routes";

export default function DashboardPage() {
  const router = useRouter();

  const { data: articles = [] } = useArticles();
  const { data: categories = [] } = useCategories();

  const statsItem = [
    { title: "Total Artikel", content: articles.length },
    { title: "Total Kategori", content: categories.length },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        {statsItem.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <div className="">
          <Button onClick={() => router.push(ROUTES.DASHBOARD_CREATE_ARTICLE)}>
            <Plus /> Tambah Artikel
          </Button>
        </div>

        <DataTable columns={articleColumns} data={articles} />
      </div>
    </div>
  );
}
