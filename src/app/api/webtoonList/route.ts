import { NextRequest, NextResponse } from "next/server";
import connectDB from "@server/index";

export async function GET(req: NextRequest) {
  const client = await connectDB();
  const db = client.db("SideProject");
  const collection = await db.collection("test").find().toArray();
  console.log("클라이언트:", client, "디비:", db, "콜렉션:", collection);
  try {
    return NextResponse.json([]);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
