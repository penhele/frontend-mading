import { ColumnDef } from "@tanstack/react-table";
import { Article } from "../types/article";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

export const articleColumns: ColumnDef<Article>[] = [
  {
    accessorKey: "title",
    header: "Judul",
  },
  {
    header: "Status",
    cell: ({ row }) => <span>{row.original.status}</span>,
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    header: "Kategori",
    cell: ({ row }) => <span>{row.original.category.name}</span>,
  },
  {
    header: "Terakhir Diedit",
    cell: ({ row }) => <span>{row.original.updatedAt}</span>,
  },
  {
    header: "Aksi",
    cell: ({ row }) => (
      <div className="flex flex-row space-x-1">
        <Button variant={"outline"} size={"icon-xs"}>
          <Trash2 />
        </Button>
        <Button variant={"outline"} size={"icon-xs"}>
          <Pencil />
        </Button>
      </div>
    ),
  },
];
