import { NextRequest, NextResponse } from "next/server";
import connectDB from "@server/index";
import webtoonList from "@server/models/webtoonList";
import { ConvertWeekId } from "@utils/Webtoon";

export async function GET(req: NextRequest) {
  const today = new Date();
  const week = today.toString().split(" ")[0];
  try {
    await connectDB();

    const todayId = ConvertWeekId(week);

    const findTodayWebtoon = await webtoonList.findById(todayId);

    // const filterTodayWebtoon = findTodayWebtoon.titleListMap.filter(
    //   list => list === ConvertTodayWeek(week),
    // );
    console.log(ConvertTodayWeek(week));

    return NextResponse.json([]);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
