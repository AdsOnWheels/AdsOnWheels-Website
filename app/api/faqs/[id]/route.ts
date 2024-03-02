import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { faqUpdateSchema } from "../../../schemas/faqSchema";

// GET /api/faqs/:id - Get a specific FAQ by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const faq = await prisma.fAQ.findUnique({
      where: { id },
    });

    if (!faq) {
      return NextResponse.json(
        { error: `FAQ with ID ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(faq);
  } catch (error) {
    console.error("Error fetching FAQ:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PUT /api/faqs/:id - Update a FAQ by ID
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const validation = faqUpdateSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validation.error.errors },
        { status: 400 }
      );
    }

    const { id } = params;
    const updatedFAQData = validation.data;
    const updatedFAQ = await prisma.fAQ.update({
      where: { id },
      data: updatedFAQData,
    });

    if (!updatedFAQ) {
      return NextResponse.json(
        { error: `FAQ with ID ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedFAQ);
  } catch (error) {
    console.error("Error updating FAQ:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// DELETE /api/faqs/:id - Delete a FAQ by ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await prisma.fAQ.delete({
      where: { id },
    });

    return NextResponse.json({ status: 204 });
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
