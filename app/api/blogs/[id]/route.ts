import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { blogUpdateSchema } from "../../../schemas/blogSchema";

// GET /api/blogs/:id - Get a specific blog by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const blog = await prisma.blog.findUnique({ where: { id } });

    if (!blog) {
      return NextResponse.json(
        { error: `Blog with ID ${id} not found` },
        { status: 404 }
      );
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/:id - Update a blog by ID
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();
    const validation = blogUpdateSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validation.error.format() },
        { status: 400 }
      );
    }

    const updatedBlogData = validation.data;

    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: updatedBlogData,
    });

    if (!updatedBlog) {
      return NextResponse.json(
        { error: `Blog with ID ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/:id - Delete a blog by ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const blog = await prisma.blog.findUnique({ where: { id } });

    if (!blog) {
      return NextResponse.json(
        { error: `Blog with ID ${id} not found` },
        { status: 404 }
      );
    }

    await prisma.blog.delete({ where: { id } });

    return NextResponse.json({ status: 204 });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
