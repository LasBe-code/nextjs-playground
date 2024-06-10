"use client";
import routerList from "@/constants/routerList";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  return (
    <header className="flex flex-row gap-2">
      {routerList.map((data) => (
        <Link key={`header-${data.path}`} href={data.path}>
          <div
            className={`${
              currentPath === data.path ? "bg-blue-400 text-white" : "bg-white"
            } shadow-md py-2 px-4 rounded-md text-sm`}
          >
            {data.label}
          </div>
        </Link>
      ))}
    </header>
  );
}
