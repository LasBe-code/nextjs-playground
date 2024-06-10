import Fetch from "@/components/Fetch";
import style from "@/constants/style";

export default function ApiMethod() {
  return (
    <div className={`${style.box}`}>
      <Fetch method="get" />
      <Fetch method="post" />
    </div>
  );
}
