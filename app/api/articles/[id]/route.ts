import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { blogUpdateSchema } from "../../../schemas/blogSchema";

// GET /api/articles/:id - Get a specific article by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const blog = await prisma.article.findUnique({ where: { id } });

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

// PUT /api/articles/:id - Update a article by ID
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
        { error: "Invalid data", details: validation.error.errors },
        { status: 400 }
      );
    }

    const updatedBlogData = validation.data;

    const updatedBlog = await prisma.article.update({
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

// DELETE /api/articles/:id - Delete a article by ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const blog = await prisma.article.findUnique({ where: { id } });

    if (!blog) {
      return NextResponse.json(
        { error: `Blog with ID ${id} not found` },
        { status: 404 }
      );
    }

    await prisma.article.delete({ where: { id } });

    return NextResponse.json({ status: 204 });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
