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
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CategoryBarChart from "./category-bar-chart";
import CategoryPieChart from "./category-pie-chart";

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
      <div className="">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <p className="text-xs text-muted-foreground">Kelola mading online</p>
      </div>

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

      <div className="flex flex-row gap-4">
        <CategoryBarChart categories={categories} />

        <CategoryPieChart categories={categories} />
      </div>
    </div>
  );
}
