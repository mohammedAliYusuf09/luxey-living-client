import { connectToDatabase } from "@/lib/dbConnect";
import Blog from "@/models/blog";
import {  NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase();
        const blogs = await Blog.find({});
        return new Response(JSON.stringify(blogs));
    } catch (error) {
       return NextResponse.json(
      { error: "Failed to fetch Blogs" },
      { status: 500 }
    );
    }
}