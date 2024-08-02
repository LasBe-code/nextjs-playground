import style from "@/constants/style";
import Link from "next/link";

const dataList = [
  { label: "Single", path: "/3-dynamic-routes/single/1" },
  { label: "Catch All", path: "/3-dynamic-routes/catch-all/1/2/3/4" },
  { label: "Optional", path: "/3-dynamic-routes/optional" },
  { label: "Optional", path: "/3-dynamic-routes/optional/1" },
];

export default function DynamicRouting() {
  return (
    <div className={`${style.box} gap-4`}>
      {dataList.map((data) => (
        <Link key={data.label} href={data.path}>
          <button className={`shadow-md py-2 px-4 rounded-md text-sm hover:opacity-70`}>
            <b>{data.label}</b> - {data.path}
          </button>
        </Link>
      ))}
    </div>
  );
}
