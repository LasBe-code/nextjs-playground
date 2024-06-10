"use client";

import style from "@/constants/style";
import { Loader } from "@lasbe/loader";

export default function Loading() {
  return (
    <div className={`${style.box} justify-center items-center`}>
      <Loader isLoading />
    </div>
  );
}
