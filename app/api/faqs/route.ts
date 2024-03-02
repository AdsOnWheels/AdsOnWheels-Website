import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { faqSchema } from "../../schemas/faqSchema";

// GET /api/faqs - Get all FAQs
export async function GET(req: NextRequest) {
  try {
    const faqs = await prisma.fAQ.findMany();
    return NextResponse.json(faqs);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST /api/faqs - Create a new FAQ
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = faqSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validation.error.errors },
        { status: 400 }
      );
    }

    const { question, answer, tag } = validation.data;
    const newFAQ = await prisma.fAQ.create({
      data: { question, answer, tag },
    });
    return NextResponse.json(newFAQ, { status: 201 });
  } catch (error) {
    console.error("Error creating FAQ:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
