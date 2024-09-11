import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { Post } from "./Post";
import { PostQueryOption } from "../usePost";

export default function Page({ params: { id } }: { params: { id: number } }) {
  return (
    <Suspense fallback={<Loading />}>
      <ServerRenderingRoute id={id} />
    </Suspense>
  );
}

// async/await 추가해야 서버 렌더링 정상 작동
async function ServerRenderingRoute({ id }: { id: number }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(PostQueryOption.getPost(id));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Post id={id} />
    </HydrationBoundary>
  );
}
