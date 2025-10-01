import { connectToDatabase } from "@/lib/dbConnect";
import Property from "@/models/property";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();

  try {
    const latestPropertys = await Property.find().sort({ createdAt: -1 }).limit(10);

    if (!latestPropertys) {
      return NextResponse.json(
        { error: "Latest property could not be found" },
        { status: 501 }
      );
    }

     console.log(latestPropertys);

     return new Response(JSON.stringify(latestPropertys));
  } catch (error) {
    return NextResponse.json(
        { error: "Latest property could not be found" },
        { status: 500 }
      );
  }
}
