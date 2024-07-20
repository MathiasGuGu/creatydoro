import { Button } from "@/components/ui/button";
import React from "react";
import Timer from "../_components/Timer/Timer";

const page = () => {
  return (
    <div className="flex w-screen">
      <section className="flex flex-col px-6 text-balance flex-1 justify-center"></section>
      <section className="flex flex-col items-center justify-center w-2/3 border h-screen gap-3">
        <Timer />
      </section>
    </div>
  );
};

export default page;
