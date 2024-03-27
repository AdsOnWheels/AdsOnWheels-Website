import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

// Function to generate select object for each model
function generateSelect(fields: string[], query: string) {
  // Find the first field that contains the query
  const relevantField = fields.find((field) =>
    query.toLowerCase().includes(field.toLowerCase())
  );
  // Select only the relevant field, or fallback to selecting the first field
  const selectFields = relevantField
    ? { [relevantField]: true }
    : { [fields[0]]: true };

  // Exclude the 'password' field if it exists in the selectFields
  if ("hashedPassword" in selectFields) {
    delete selectFields["hashedPassword"];
  }

  return selectFields;
}

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
        select: generateSelect(["title", "content"], query),
      }),
      prisma.blog.findMany({
        where: generateWhere(query, ["title", "content"]),
        select: generateSelect(["title", "content"], query),
      }),
      prisma.fAQ.findMany({
        where: generateWhere(query, ["question", "answer"]),
        select: generateSelect(["question", "answer"], query),
      }),
      prisma.contact.findMany({
        where: generateWhere(query, ["firstName", "lastName"]),
        select: generateSelect(["firstName", "lastName"], query),
      }),
      prisma.user.findMany({
        where: generateWhere(query, ["username"]),
        select: generateSelect(["username"], query),
      }),
      prisma.rider.findMany({
        where: generateWhere(query, ["fullName", "cityRegion"]),
        select: generateSelect(["fullName", "cityRegion"], query),
      }),
      prisma.brand.findMany({
        where: generateWhere(query, [
          "firstName",
          "lastName",
          "industry",
          "company",
          "title",
          "website",
        ]),
        select: generateSelect(
          ["firstName", "lastName", "industry", "company", "title", "website"],
          query
        ),
      }),
    ]);

    // Flatten the nested arrays and select only relevant fields
    const flattenedSearchResults: any[] = searchResults
      .flat()
      .map((result) => ({
        id: result.id,
        ...result,
      }));

    // Filter out any results that don't contain the search query
    const filteredResults = flattenedSearchResults.filter((result) => {
      return Object.values<string>(result).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
      );
    });

    return NextResponse.json(filteredResults);
  } catch (error) {
    console.error("Error fetching search results:", error);
    return NextResponse.json(
      { error: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}
