import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@server/mongodb";

export async function GET(req: NextRequest) {
  try {
    const res = await fetch(
      "https://comic.naver.com/api/webtoon/titlelist/weekday?order=user",
      {
        method: "GET",
      },
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const body = await req.json();
    const webtoon = new Webtoon(body);
    const savedWebtoon = await webtoon.save();
    return NextResponse.json(savedWebtoon, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
