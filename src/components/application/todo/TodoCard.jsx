"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TodoCard = ({ todo }) => {
  const route = useRouter();
  const handleDelete = async (todo) => {
    try {
      const res = await fetch(`http://localhost:3000/api/todo/delete`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      if (!res.ok) {
        throw new Error("res problem");
      }
      route.refresh();
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className={"h-45 max-w-[400px] mx-auto rounded-none mt-2 py-2 gap-2"}>
      <CardHeader className={"text-center"}>
        <CardTitle>Todos</CardTitle>
        <CardDescription>This is a Todos applications</CardDescription>
      </CardHeader>
      <CardContent className={"flex flex-col"}>
        <div className="flex gap-2">
          <Label className={"underline"}>Title: </Label>
          <span>{todo.title}</span>
        </div>
        <div className="flex gap-2">
          <Label className={"underline"}>Description: </Label>
          <span>{todo.description}</span>
        </div>
        <div className=" flex gap-x-4 mt-2 items-center">
          <Link
            className="h-8 w-20 bg-teal-300 leading-8 text-center cursor-pointer duration-200 ease-in hover:bg-teal-200"
            href={`/edit-todo/${todo._id}`}
          >
            Edit
          </Link>
          <Button
            onClick={() => handleDelete(todo)}
            className="rounded-none h-8 w-20 bg-teal-400 leading-8 text-center cursor-pointer duration-200 ease-in hover:bg-teal-200 "
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
