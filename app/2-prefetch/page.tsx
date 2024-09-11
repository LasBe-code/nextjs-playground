import { PostQueryOption } from "./usePost";
import { PostList } from "./PostList";
import PrefetchBoundary from "./PrefetchBoundary";

export default async function Page() {
  return (
    <PrefetchBoundary options={PostQueryOption.getPostList()}>
      <PostList />
    </PrefetchBoundary>
  );
}
