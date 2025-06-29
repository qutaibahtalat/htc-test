import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const url = req.nextUrl.searchParams.get("url");

  if (!url || typeof url !== "string") {
    return NextResponse.json(
      { error: "Missing or invalid URL parameter" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching SVG: ${response.statusText}`);
    }

    const svgText = await response.text();

    return new Response(svgText);
  } catch (error) {
    console.error("Proxy Error:", error);
    return new Response("Failed to fetch SVG", { status: 500 });
  }
};
