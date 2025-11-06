import ConnectionDB from "@/lib/dbConfig";
import Todo from "@/models/todoSchema";
import { zSchema } from "@/models/zSchema";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await ConnectionDB();
    const validatedSchema = zSchema.pick({
      title: true,
      description: true,
    });

    const payload = await req.json();
    const validatedData = validatedSchema.safeParse(payload);

    if (!validatedData.success) {
      return NextResponse.json({
        message: "Validation Failed",
        status: 400,
      });
    }

    const { title, description } = validatedData.data;

    const todo = new Todo({
      title,
      description,
    });
    await todo.save();

    return NextResponse.json({
      message: "Post Method Successful",
      status: 200,
      todo,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Post Method Failed",
      status: 400,
    });
  }
};
