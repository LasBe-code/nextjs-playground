import { instance } from "@/libs/axios";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default class Service {
  static async method(method: "get" | "post") {
    if (method === "get") {
      const response = await instance.get<MethodType>("/method");
      return response.data;
    } else {
      const response = await instance.post<MethodType>("/method");
      return response.data;
    }
  }
  static async getPosts(id?: string) {
    await delay(3000);
    const response = await instance.get<PostType>(`/posts/${id}`);
    return response.data;
  }
}

export type MethodType = {
  method: string;
};

export type PostType = {
  data?: { id: number; title: string; content: string }[];
  postId: number;
};
