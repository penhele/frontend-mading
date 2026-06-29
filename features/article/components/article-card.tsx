import { Badge } from "@/components/ui/badge";
import { Article } from "../types/article";

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <div className="space-y-2 hover:-translate-y-2 hover:-rotate-2 transition-all cursor-pointer">
      <div className="relative">
        <div className="bg-muted aspect-video rounded-lg" />
        <Badge variant={"outline"} className="absolute bg-card top-2 left-2">
          {article.category.name}
        </Badge>

        <Badge
          variant={"outline"}
          className="absolute bg-card right-2 bottom-2"
        >
          {new Date(article.createdAt).toISOString()}
        </Badge>
      </div>

      <div className="">
        <h1 className="font-semibold">{article.title}</h1>
        <p className="text-sm text-muted-foreground">{article.content}</p>
      </div>
    </div>
  );
}
