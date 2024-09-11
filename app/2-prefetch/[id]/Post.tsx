"use client";
import style from "@/constants/style";
import { usePost } from "../usePost";

export const Post = ({ id }: { id: number }) => {
  const { data } = usePost(id);
  return <div className={`${style.box} flex-col gap-4`}>{data?.body}</div>;
};
