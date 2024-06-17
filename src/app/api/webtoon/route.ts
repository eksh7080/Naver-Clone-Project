import { NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

const NAVER_WEBTOON_URL = "https://comic.naver.com/webtoon";

export async function GET() {
  try {
    const { data } = await axios.get(NAVER_WEBTOON_URL);
    const $ = cheerio.load(data);

    const webtoons = [];
    $(".col_inner ul li").each((index, element) => {
      const title = $(element).find("a.title").text().trim();
      const author = $(element).find("a").eq(1).text().trim();
      const link =
        "https://comic.naver.com" + $(element).find("a.title").attr("href");
      const thumbnail = $(element).find("img").attr("src");

      if (title && author && link && thumbnail) {
        webtoons.push({ title, author, link, thumbnail });
      }
    });

    return NextResponse.json(webtoons, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error scraping data" }, { status: 500 });
  }
}
