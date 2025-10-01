import { connectToDatabase } from "@/lib/dbConnect";
import Blog from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const searchParams: URLSearchParams = request.nextUrl.searchParams;

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Id is required" }, { status: 501 });
    }

    const blogDetails = await Blog.findById(id);

    if (!blogDetails) {
      return NextResponse.json(
        { error: "Blog could not be found" },
        { status: 500 }
      );
    }

    return new Response(JSON.stringify(blogDetails));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Blog could not be found" },
      { status: 400 }
    );
  }
}
