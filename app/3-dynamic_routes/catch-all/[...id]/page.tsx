import style from "@/constants/style";

type Props = { params: { id: string[] } };

export default function CatchAll(props: Props) {
  const { params } = props;
  console.log("PROPS =>", props);
  return (
    <div className={style.box}>
      <h1>{JSON.stringify(params)}</h1>
    </div>
  );
}
