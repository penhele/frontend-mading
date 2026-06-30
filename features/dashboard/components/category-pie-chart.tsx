import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Category } from "@/features/category/types/category";
import { Article } from "@/features/article/types/article";
import { LabelList, Pie, PieChart } from "recharts";

interface Props {
  categories: Category[];
  articles?: Article[];
}

export default function CategoryPieChart({ categories, articles }: Props) {
  const colors = [
    "var(--chart-1)",
    "var(--chart-2)",
    "var(--chart-3)",
    "var(--chart-4)",
    "var(--chart-5)",
  ];

  const chartConfig = categories.reduce((acc, category, index) => {
    acc[category.slug] = {
      label: category.name,
      color: colors[index % colors.length],
    };
    return acc;
  }, {} as ChartConfig);

  const getArticleCount = (catId: number) => {
    if (articles) {
      return articles.filter((a) => a.category.id === catId).length;
    }
    return categories.find((c) => c.id === catId)?._count?.articles || 0;
  };

  const chartData = categories.map((category) => ({
    category: category.name,
    total: getArticleCount(category.id),
    fill: `var(--color-${category.slug})`,
  }));

  const totalString = chartData
    .map((item) => `${item.category}: ${item.total}`)
    .join(" | ");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Proporsi Kategori</CardTitle>
        <CardDescription>{totalString}</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="total"
              nameKey="category"
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="var(--foreground)"
                  >
                    {payload.total}
                  </text>
                );
              }}
            >
              <LabelList
                dataKey={"category"}
                className="fill-background"
                stroke="none"
                fontSize={12}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
