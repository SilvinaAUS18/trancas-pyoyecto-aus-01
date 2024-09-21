// http://localhost:3000/api/blog/someid

import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import Noticia from '@/model/Noticia';

export async function PUT(req, res) {
  await connectDB();

  const id = res.params.id;

  try {
    const body = await req.json();
    const blog = await Noticia.findById(id)


    const updateBlog = await Noticia.findByIdAndUpdate(
      blog,
      { $set: { ...body } },
      { new: true }
    );

    return NextResponse.json(updateBlog, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "PUT error" }, {status: 500});
  }
}

export async function GET(req, res) {
  await connectDB();

  const id = res.params.id;

  try {
    const blog = await Noticia.findById(id)

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "GET error" },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req, res) {
    await connectDB();
  
    const id = res.params.id;
    console.log(id)
  
  
  
    try {
      const blog = await Noticia.findById(id)
  
  
      await Noticia.findByIdAndDelete(blog)
  
      return NextResponse.json({msg: "Successfully deleted blog"}, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Delete error" }, {status: 500});
    }
  }
