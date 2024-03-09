import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { blogSchema } from "../../schemas/blogSchema";

// GET /api/articles - Get all articles
export async function GET(req: NextRequest) {
  try {
    const blogs = await prisma.article.findMany();
    // Check if any articles are found
    if (!blogs || blogs.length === 0) {
      return NextResponse.json({ error: "No blogs found" }, { status: 404 });
    }
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST /api/articles - Create a new article
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = blogSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { title, content } = validation.data;

    const newBlog = await prisma.article.create({
      data: { title, content },
    });

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
