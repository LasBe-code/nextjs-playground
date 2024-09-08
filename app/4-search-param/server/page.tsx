import style from "@/constants/style";

type SearchParamProps = {
  searchParams: {
    page: number;
    title: string;
  };
};

export default function ServerSearchParam(props: SearchParamProps) {
  console.log(props);
  const page = props.searchParams.page;
  const title = props.searchParams.title;
  return (
    <div className={style.box}>
      <h1>{JSON.stringify(props)}</h1>
      <h1>{`page -> ${page} / title -> ${title}`}</h1>
    </div>
  );
}
