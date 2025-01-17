import { NextRequest, NextResponse } from "next/server";
import connectDB from "@server/index";
import webtoonList from "@server/models/webtoonList";
import { ConvertNewWebtoonId } from "@utils/Webtoon";
import newWebtoonList from "@server/models/newWebtoonList";

export async function GET(req: NextRequest) {
  const today = new Date();
  const week = today.toString().split(" ")[0];
  try {
    await connectDB();
    const todayId = ConvertNewWebtoonId(week);
    const findTodayNewWebtoon = await newWebtoonList.findById(todayId);

    console.log(" kskxkskxkskxkskxksk");

    return NextResponse.json(findTodayNewWebtoon);
  } catch (error) {
    return NextResponse.json(error);
  }
}
