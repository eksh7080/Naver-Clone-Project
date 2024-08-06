import { NextRequest, NextResponse } from "next/server";
import connectDB from "@server/index";
import webtoonList from "@server/models/webtoonList";
import { ConvertTodayWeek, ConvertWeekId } from "@utils/Webtoon";

export async function GET(req: NextRequest) {
  const today = new Date();
  const week = today.toString().split(" ")[0];
  try {
    await connectDB();

    const todayId = ConvertWeekId(week);
    const findTodayWebtoon = await webtoonList.findById(todayId);
    const entriesObj = Object.entries(findTodayWebtoon.titleListMap);
    const fromEntriesObj = Object.fromEntries(entriesObj);

    return NextResponse.json(fromEntriesObj);
  } catch (error) {
    return NextResponse.json(error);
  }
}
