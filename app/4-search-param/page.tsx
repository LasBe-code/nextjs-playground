import style from "@/constants/style";
import Link from "next/link";

export default function SearchParam() {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <Link href="/4-search-param/client?page=1&title=hello" className={style.box}>
        Client
      </Link>
      <Link href="/4-search-param/server?page=1&title=hello" className={style.box}>
        Server
      </Link>
    </div>
  );
}
