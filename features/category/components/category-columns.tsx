import { ColumnDef } from "@tanstack/react-table";
import { Category } from "../types/category";
import { getFormatDate } from "@/lib/utils/get-format-date";
import DeleteButton from "@/components/buttons/delete-button";
import { deleteCategory } from "../api/delete-category";
import { categoryKeys } from "../queries/category-keys";

export const categoryColumns: ColumnDef<Category>[] = [
  { accessorKey: "name", header: "Nama" },
  { accessorKey: "slug", header: "Slug" },
  {
    header: "Terakhir diedit",
    cell: ({ row }) => <span>{getFormatDate(row.original.updatedAt)}</span>,
  },
  {
    header: "Jumlah Artikel",
    cell: ({ row }) => <span>{row.original._count.articles}</span>,
  },
  {
    header: "Aksi",
    cell: ({ row }) => (
      <div className="flex flex-row space-x-1">
        <DeleteButton
          id={row.original.id}
          mutationFn={deleteCategory}
          queryKey={categoryKeys.all}
        />
      </div>
    ),
  },
];
