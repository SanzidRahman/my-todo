import ConnectionDB from "@/lib/dbConfig";
import Todo from "@/models/todoSchema";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  try {
    await ConnectionDB();
    const payload = await req.json();
    const { id } = payload._id;
    const newTodo = await Todo.findOneAndDelete(id);
    return NextResponse.json({
      message: "Delete Method Successful",
      status: 200,
      newTodo,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Delete Method Failed",
      status: 400,
      error,
    });
  }
};
