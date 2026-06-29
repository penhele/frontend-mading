import { ColumnDef } from "@tanstack/react-table";
import { Article } from "../types/article";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import StatusSelect from "./status-select";
import DeleteButton from "@/components/buttons/delete-button";
import { deleteArticle } from "../api/delete-article";
import { articleKeys } from "../queries/article-keys";
import EditButton from "@/components/buttons/edit-button";
import { ROUTES } from "@/contants/routes";

export const articleColumns: ColumnDef<Article>[] = [
  {
    accessorKey: "title",
    header: "Judul",
  },
  {
    header: "Status",
    cell: ({ row }) => (
      <StatusSelect articleId={row.original.id} status={row.original.status} />
    ),
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
        <DeleteButton
          id={row.original.id}
          mutationFn={deleteArticle}
          queryKey={articleKeys.all}
        />
        <EditButton route={ROUTES.DASHBOARD_UPDATE_ARTICLE(row.original.id)} />
      </div>
    ),
  },
];
