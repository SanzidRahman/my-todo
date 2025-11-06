import ConnectionDB from "@/lib/dbConfig";
import Todo from "@/models/todoSchema";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectionDB();

    const todo = await Todo.find();
    return NextResponse.json({
      message: "Get Method Successful",
      status: 200,
      todo,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Get Method Failed",
      status: 400,
    });
  }
};
