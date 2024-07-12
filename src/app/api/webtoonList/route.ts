import { NextRequest, NextResponse } from "next/server";
import connectDB from "@server/index";
import webtoonList from "@server/models/webtoonList";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const findeList = await webtoonList.find();
    console.log("파인드 디비 리스트:", findeList);

    return NextResponse.json([]);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
