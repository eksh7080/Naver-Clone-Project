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

    // const filterTodayWebtoon = Object.keys(findTodayWebtoon.titleListMap).map(
    //   day => {
    //     findTodayWebtoon.titleListMap[day] === week;
    //   },
    // );

    console.log("1111");
    // console.log(filterTodayWebtoon, "555");
    const ent = Object.entries(findTodayWebtoon.titleListMap);
    const ass = Object.fromEntries(ent);

    console.log("@@@@@", ass);
    return NextResponse.json([]);
  } catch (error) {
    return NextResponse.json(error);
  }
}
