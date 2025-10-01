import { connectToDatabase } from "@/lib/dbConnect";
import  Property  from "@/models/property";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectToDatabase();
       const searchParams: URLSearchParams = request.nextUrl.searchParams;

        // 1. Extract string values
        const propertyType = searchParams.get('propertyType');
        const status = searchParams.get('status');
        const location = searchParams.get('location');
        
        // 2. Extract and convert to numbers (using Number() for safety)
        // If the parameter is not present or is not a valid number, Number() returns NaN.
        const bedrooms = searchParams.has('bedrooms') ? Number(searchParams.get('bedrooms')) : null;
        const bathrooms = searchParams.has('bathrooms') ? Number(searchParams.get('bathrooms')) : null;
        const minPrice = searchParams.has('minPrice') ? Number(searchParams.get('minPrice')) : null;
        const maxPrice = searchParams.has('maxPrice') ? Number(searchParams.get('maxPrice')) : null;

        // 3. Build the Mongoose filter object
        const filter: { [key: string]: unknown } = {};

        // Basic string matches
        if (propertyType) filter.propertyType = propertyType;
        if (status) filter.status = status;
        if (location) filter.location = location; // You might use a regex for partial match: { location: new RegExp(location, 'i') }

        // Exact number matches (e.g., bedrooms=3)
        // Check if the number conversion resulted in a valid number (not null AND not NaN)
        if (bedrooms !== null && !isNaN(bedrooms)) filter.bedrooms = bedrooms;
        if (bathrooms !== null && !isNaN(bathrooms)) filter.bathrooms = bathrooms;

        // Price Range Filtering (using MongoDB $gte and $lte operators)
        const priceFilter: { [key: string]: number } = {};
        
        // Add minimum price
        if (minPrice !== null && !isNaN(minPrice)) {
            priceFilter.$gte = minPrice; // $gte: Greater than or equal to
        }
        
        // Add maximum price
        if (maxPrice !== null && !isNaN(maxPrice)) {
            priceFilter.$lte = maxPrice; // $lte: Less than or equal to
        }

        // Apply price filter only if $gte or $lte were added
        if (Object.keys(priceFilter).length > 0) {
            filter.price = priceFilter;
        }


        // 4. Execute the query
        const properties = await Property.find(filter);

        return new Response(JSON.stringify(properties));

    } catch (error) {
       return NextResponse.json(
      { error: "Failed to fetch propertys" },
      { status: 500 }
    );
    }
}