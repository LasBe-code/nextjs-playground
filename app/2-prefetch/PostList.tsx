"use client";

import Link from "next/link";
import { usePostList } from "./usePost";

export const PostList = () => {
  const { data } = usePostList();
  return (
    <div className="flex flex-col gap-4">
      {!!data?.length &&
        data.map((item) => (
          <Link key={item.id} href={`/2-prefetch/${item.id}`}>
            {item.title}
          </Link>
        ))}
    </div>
  );
};
