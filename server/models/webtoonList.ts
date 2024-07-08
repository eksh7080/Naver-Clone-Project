import mongoose from "mongoose";

/**
 * 웹툰리스트 타입
 * dayOfWeek: String // 오늘
 * titleListMap: {
 * MONDAY: [
 *  {
 *   adult: Boolean // 성인 웹툰 판별
 *   author: String // 작가
 *   bestChallengeLevelUp: Boolean
 *   bm: Boolean
 *   finish: Boolean
 *   new: Boolean // 신작
 *   openToday: Boolean
 *   potenUp: Boolean
 *   rest: Boolean // 휴재
 *   starScore: Boolean  // 별점
 *   thumbnailUrl: String // 썸네일
 *   titleId: Number
 *   titleName: String // 웹툰 제목
 *   up: Boolean
 *   viewCount: Number // 조회수
 *  }
 * ]
 * }
 *
 */

const WeekDayContent = new mongoose.Schema({
  adult: Boolean,
  author: String,
  bestChallengeLevelUp: Boolean,
  bm: Boolean,
  finish: Boolean,
  new: Boolean,
  openToday: Boolean,
  potenUp: Boolean,
  rest: Boolean,
  starScore: Number,
  thumbnailUrl: String,
  titleId: Number,
  titleName: String,
  up: Boolean,
  viewCount: Number,
});

const WebtoonListSchema = new mongoose.Schema({
  dayOfWeek: String,
  titleListMap: {
    MONDAY: [WeekDayContent],
    TUESDAY: [WeekDayContent],
    WEDNESDAY: [WeekDayContent],
    THURSDAY: [WeekDayContent],
    FRIDAY: [WeekDayContent],
    SATURDAY: [WeekDayContent],
    SUNDAY: [WeekDayContent],
  },
});

export default mongoose.models.WebtoonList ||
  mongoose.model("WebtoonList", WebtoonListSchema);
