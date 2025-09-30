import { connectToDatabase } from "@/lib/dbConnect";
import  Property  from "@/models/property";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {
        await connectToDatabase();
        const filter : URLSearchParams = request.nextUrl.searchParams;
        console.log(filter);
        const properties = await Property.find({});
        return new Response(JSON.stringify(properties));
    } catch (error) {
       return NextResponse.json(
      { error: "Failed to fetch propertys" },
      { status: 500 }
    );
    }
}