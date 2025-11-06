import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-10 max-w-[400px] mx-auto bg-cyan-400 flex justify-center items-center gap-x-2">
      <Link href={"/admin/dashboard"}>AdminPage</Link>
      <Link href={"/"}>HomePage</Link>
    </div>
  );
};

export default Navbar;
