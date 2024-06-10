"use client";

import style from "@/constants/style";
import Service from "@/service/service";
import { useQuery } from "@tanstack/react-query";

export default function ServerRendering({ id }: { id?: string }) {
  const { data } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => Service.getPosts(id),
  });

  return (
    <div className={`${style.box} flex-col gap-4`}>
      {!!data?.data?.length &&
        data.data.map((post) => (
          <div key={post.id} className="flex flex-col gap-2">
            <h1 className="font-bold">
              [{post.id}] {post.title}
            </h1>
            <p>{post.content}</p>
          </div>
        ))}
    </div>
  );
}
