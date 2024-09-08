"use client";

import Service from "@/service/service";
import { useQuery } from "@tanstack/react-query";

export default function Fetch({ method }: { method: "get" | "post" }) {
  const { data } = useQuery({
    queryKey: ["fetch", method],
    queryFn: () => Service.method(method),
  });
  return (
    <div>
      <h1>{data?.method}</h1>
    </div>
  );
}
