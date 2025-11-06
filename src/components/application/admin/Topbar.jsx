import { Button } from "@/components/ui/button";
import React from "react";

const Topbar = () => {
  return (
    <div className=" h-12 fixed top-0 left-0 border-b md:ps-70 items-center w-full px-4 z-999 flex justify-between">
      <div>
        <input placeholder="Search" className="h-6 border px-2 py-4 w-60 " />
      </div>
      <div>
        <Button className={"rounded-none"}>Logout</Button>
      </div>
    </div>
  );
};

export default Topbar;
