import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@server/index";
import webtoonList from "@server/models/webtoonList";

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
    console.log(body.data, "바디");
    const webtoon = new webtoonList(body.data);
    console.log(webtoon, "웹툰 스키마");
    const savedWebtoon = await webtoon.save();

    return NextResponse.json(savedWebtoon, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
