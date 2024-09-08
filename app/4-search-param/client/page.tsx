"use client";

import style from "@/constants/style";
import { useSearchParams } from "next/navigation";

export default function ClientSearchParam() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const title = searchParams.get("title");

  return (
    <div className={style.box}>
      <h1>{`page -> ${page} / title -> ${title}`}</h1>
    </div>
  );
}
