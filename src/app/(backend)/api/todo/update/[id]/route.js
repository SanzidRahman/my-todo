import ConnectionDB from "@/lib/dbConfig";
import Todo from "@/models/todoSchema";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  try {
    await ConnectionDB();
    const { id } = await params;
    const payload = await req.json();
    const { title, description } = payload;

    const todo = await Todo.findByIdAndUpdate(id, {
      title,
      description,
    });

    await todo.save();
    return NextResponse.json({
      message: "PUT Method Successful",
      status: 200,
      todo,
    });
  } catch (error) {
    return NextResponse.json({
      message: "PUT Method Failed",
      status: 400,
    });
  }
};

export const GET = async (req, { params }) => {
  try {
    await ConnectionDB();
    const { id } = await params;

    const todo = await Todo.findById(id);
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
