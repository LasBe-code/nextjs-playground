import { NextResponse } from "next/server";

export async function GET({}, { params }: { params: { id?: string[] } }) {
  const { id } = params; // 경로 파라미터에서 id 추출
  const singleId = id?.length ? id[0] : null;
  if (!singleId)
    return NextResponse.json(
      { data: postList, postId: singleId },
      { status: 200 }
    );

  if (+singleId > postList.length)
    return NextResponse.json({ postId: singleId }, { status: 404 });

  const index = +singleId - 1;
  return NextResponse.json(
    { data: [postList[+index]], postId: index },
    { status: 200 }
  );
}

const postList = [
  {
    id: 1,
    title: "Title 1",
    content: "Hello World",
  },
  {
    id: 2,
    title: "Title 2",
    content: "Hello World 2",
  },
  {
    id: 3,
    title: "Title 3",
    content: "Hello World 3",
  },
];
