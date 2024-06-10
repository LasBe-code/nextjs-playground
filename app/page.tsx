import routerList from "@/constants/routerList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-2">
      {routerList.map((data) => (
        <Link key={data.label} href={data.path} className="flex">
          <div className="flex-1 p-4 shadow-md hover:-translate-y-1 transition bg-white">
            <p className="font-bold">{data.label}</p>
            <p>{data.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
