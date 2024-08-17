import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@server/index";
import newWebtoonList from "@server/models/newWebtoonList";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const week = searchParams.get("week");
  const tag = searchParams.get("tag");
  const sortByUpdate = searchParams.get("sortByUpdate");
  try {
    const res = await fetch(
      `https://comic.naver.com/api/tripleRecommend?week=${week}&tag=${tag}&sortByUpdate=${sortByUpdate}`,
      { method: "GET" },
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
    const webtoon = new newWebtoonList(body);
    const savedWebtoon = await webtoon.save();

    return NextResponse.json(savedWebtoon, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
