import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

// Function to generate where object for each model
function generateWhere(query: string, fields: string[]) {
  return {
    OR: fields.map((field) => ({ [field]: { contains: query } })),
  };
}

// GET /api/search - Get all search results
export async function GET(req: NextRequest) {
  try {
    const queryParams = new URLSearchParams(req.url.split("?")[1]);
    const query = queryParams.get("q");

    if (!query || query.trim() === "") {
      return NextResponse.json(
        { error: "Query parameter is required and must not be empty" },
        { status: 400 }
      );
    }

    const searchResults = await Promise.all([
      prisma.article.findMany({
        where: generateWhere(query, ["title", "content"]),
      }),
      prisma.blog.findMany({
        where: generateWhere(query, ["title", "content"]),
      }),
      prisma.fAQ.findMany({
        where: generateWhere(query, ["question", "answer"]),
      }),
      prisma.contact.findMany({
        where: generateWhere(query, [
          "firstName",
          "lastName",
          "email",
          "message",
        ]),
      }),
      prisma.user.findMany({
        where: generateWhere(query, ["username", "email", "phoneNumber"]),
      }),
      prisma.rider.findMany({
        where: generateWhere(query, [
          "fullName",
          "email",
          "cityRegion",
          "postCode",
        ]),
      }),
      prisma.brand.findMany({
        where: generateWhere(query, [
          "firstName",
          "lastName",
          "industry",
          "company",
          "title",
          "businessEmail",
          "website",
        ]),
      }),
    ]);

    const flattenedSearchResults = searchResults.flat();
    return NextResponse.json(flattenedSearchResults);
  } catch (error) {
    console.error("Error fetching search results:", error);
    return NextResponse.json(
      { error: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}
