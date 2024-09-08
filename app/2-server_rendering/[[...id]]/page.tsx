import Service from "@/service/service";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ServerRendering from "../ServerRendering";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default function Page({ params }: { params: { id?: string[] } }) {
  const id = params?.id?.length ? params.id[0] : "";
  return (
    <Suspense fallback={<Loading />}>
      <ServerRenderingRoute id={id} />
    </Suspense>
  );
}

// async/await 추가해야 서버 렌더링 정상 작동
async function ServerRenderingRoute({ id }: { id?: string }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: () => Service.getPosts(id),
  });
  // console.log(queryClient.getQueryData(["posts", id]));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ServerRendering id={id} />
    </HydrationBoundary>
  );
}
