"use client";

import { instance } from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";

type GetDataType = {
  method: string;
};

const getData = async (method: "get" | "post") => {
  if (method === "get") {
    const response = await instance.get<GetDataType>("/method");
    return response.data;
  } else {
    const response = await instance.post<GetDataType>("/method");
    return response.data;
  }
};

export default function Fetch({ method }: { method: "get" | "post" }) {
  const { data } = useQuery({
    queryKey: ["fetch", method],
    queryFn: () => getData(method),
  });
  return (
    <div>
      <h1>{data?.method}</h1>
    </div>
  );
}
