"use client";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/contants/routes";
import { articleColumns } from "@/features/article/components/article-columns";
import { useArticles } from "@/features/article/hooks/use-articles";
import { useCategories } from "@/features/category/hooks/use-categories";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import CategoryBarChart from "./category-bar-chart";
import CategoryPieChart from "./category-pie-chart";
import StatsCard from "./stats-card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CreateCategoryForm from "@/features/category/components/create-category-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categoryColumns } from "@/features/category/components/category-columns";

export default function DashboardPage() {
  const router = useRouter();

  const { data: articles = [] } = useArticles();
  const { data: categories = [] } = useCategories();

  const totalPublished = articles.filter(
    (a) => a.status === "PUBLISHED",
  ).length;
  const totalDraft = articles.filter((a) => a.status === "DRAFT").length;

  const statsItem = [
    { title: "Total Artikel", content: articles.length },
    { title: "Total Kategori", content: categories.length },
    { title: "Artikel Diterbitkan", content: totalPublished },
    { title: "Artikel Draf", content: totalDraft },
  ];

  return (
    <div className="space-y-4">
      <div className="">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <p className="text-xs text-muted-foreground">Kelola mading online</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {statsItem.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>

      <Tabs
        defaultValue="article"
        orientation="vertical"
        className="flex flex-col"
      >
        <TabsList>
          <TabsTrigger value="article">Artikel</TabsTrigger>
          <TabsTrigger value="category">Kategori</TabsTrigger>
        </TabsList>

        <TabsContent value="article">
          <div className="space-y-2">
            <Button
              onClick={() => router.push(ROUTES.DASHBOARD_CREATE_ARTICLE)}
            >
              <Plus /> Tambah Artikel
            </Button>

            <DataTable columns={articleColumns} data={articles} />
          </div>
        </TabsContent>

        <TabsContent value="category">
          <div className="space-y-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button>
                  <Plus /> Tambah Kategori
                </Button>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Buat Kategori</SheetTitle>
                </SheetHeader>

                <CreateCategoryForm className="p-6" />
              </SheetContent>
            </Sheet>

            <DataTable data={categories} columns={categoryColumns} />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex flex-col gap-2"></div>

      <div className="flex flex-row gap-4">
        <CategoryBarChart categories={categories} articles={articles} />

        <CategoryPieChart categories={categories} articles={articles} />
      </div>
    </div>
  );
}
