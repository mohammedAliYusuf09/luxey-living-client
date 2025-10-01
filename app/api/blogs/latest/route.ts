import { connectToDatabase } from "@/lib/dbConnect";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();

    const latest = await Blog.find().sort({ createdAt: -1 }).limit(10);

    if (!latest) {
      return NextResponse.json(
        { error: "Latest Blog could not be found" },
        { status: 501 }
      );
    }

    return new Response(JSON.stringify(latest));
  } catch (error) {
    return NextResponse.json(
      { error: "Latest Blog could not be found" },
      { status: 500 }
    );
  }
}
