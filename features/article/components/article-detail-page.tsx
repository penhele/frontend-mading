"use client";

import { useParams } from "next/navigation";

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div className="">
      <div className="">{slug}</div>
    </div>
  );
}
