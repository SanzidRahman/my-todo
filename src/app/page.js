import Navbar from "@/components/application/Navbar";
import ShowTodo from "@/components/application/todo/ShowTodo";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <ShowTodo />
    </div>
  );
};

export default HomePage;
