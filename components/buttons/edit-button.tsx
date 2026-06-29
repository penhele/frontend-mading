"use client";

import { Pencil } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  route: string;
}

export default function EditButton({ route }: Props) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(route)}
      variant={"outline"}
      size={"icon-xs"}
    >
      <Pencil />
    </Button>
  );
}
