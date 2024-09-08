import style from "@/constants/style";
import Fetch from "./Fetch";

export default function ApiMethod() {
  return (
    <div className={`${style.box}`}>
      <Fetch method="get" />
      <Fetch method="post" />
    </div>
  );
}
