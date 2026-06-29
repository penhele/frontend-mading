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
import { CartesianGrid, XAxis, YAxis, Bar, BarChart } from "recharts";

interface Props {
  categories: Category[];
}

export default function CategoryBarChart({ categories }: Props) {
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

  const totalArticlesFromCategories = categories.reduce(
    (sum, cat) => sum + (cat._count?.articles || 0),
    0,
  );

  const chartData = categories.map((category, index) => {
    const count = category._count?.articles || 0;
    const percentage =
      totalArticlesFromCategories > 0
        ? Math.round((count / totalArticlesFromCategories) * 100)
        : 0;

    return {
      category: category.name,
      percentage: percentage,
      fill: colors[index % colors.length],
    };
  });

  const percentageString = chartData
    .map((item) => `${item.percentage}% ${item.category}`)
    .join(" | ");

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Kategori</CardTitle>
        <CardDescription>
          {percentageString || "Belum ada data artikel"}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={"category"}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              dataKey={"percentage"}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey={"percentage"} fill="var-(--chart-1)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
