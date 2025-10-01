import { connectToDatabase } from "@/lib/dbConnect";
import Property from "@/models/property";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToDatabase();
  const searchParams: URLSearchParams = request.nextUrl.searchParams;

  const id = searchParams.get("id");

  try {
    const propertyDetaisl = await Property.findById(id);

    if (!propertyDetaisl) {
      return NextResponse.json(
        { error: "This property could not be found" },
        { status: 500 }
      );
    }

    console.log(propertyDetaisl);

     return new Response(JSON.stringify(propertyDetaisl));

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch propertys" },
      { status: 500 }
    );
  }
}
