import DeleteButton from "@/components/buttons/delete-button";
import EditButton from "@/components/buttons/edit-button";
import { ROUTES } from "@/contants/routes";
import { ColumnDef } from "@tanstack/react-table";
import { deleteArticle } from "../api/delete-article";
import { articleKeys } from "../queries/article-keys";
import { Article } from "../types/article";
import StatusSelect from "./status-select";

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
        <EditButton route={ROUTES.DASHBOARD_UPDATE_ARTICLE(row.original.slug)} />
      </div>
    ),
  },
];
