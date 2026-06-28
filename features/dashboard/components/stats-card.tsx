import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface Props {
  title: string;
  content: string | number;
}

export default function StatsCard({ stat }: { stat: Props }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{stat.title}</CardTitle>
        <CardAction>
          <Tooltip>
            <TooltipTrigger>
              <Info size={12} />
            </TooltipTrigger>

            <TooltipContent>
              <span>{stat.title}</span>
            </TooltipContent>
          </Tooltip>
        </CardAction>
      </CardHeader>

      <CardContent>
        <span className="text-2xl font-bold">{stat.content}</span>
      </CardContent>
    </Card>
  );
}
