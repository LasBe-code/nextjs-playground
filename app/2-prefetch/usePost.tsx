import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export class PostService {
  static async getPost(id: number) {
    const response = await axios
      .get<PostType>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((data) => data);
    return response.data;
  }
  static async getPostList() {
    const response = await axios
      .get<PostType[]>(`https://jsonplaceholder.typicode.com/posts`)
      .then((data) => data);
    return response.data;
  }
}

export class PostQueryOption {
  static getPost(id: number) {
    return { queryKey: ["post", id], queryFn: () => PostService.getPost(id) };
  }
  static getPostList() {
    return { queryKey: ["post"], queryFn: () => PostService.getPostList() };
  }
}

export const usePost = (id: number) => {
  return useQuery(PostQueryOption.getPost(id));
};

export const usePostList = () => {
  return useQuery(PostQueryOption.getPostList());
};
