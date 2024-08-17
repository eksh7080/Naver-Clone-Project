import mongoose from "mongoose";

/**
 * 신작 웹툰 리스트 타입
 * itemList[
 * {
 * adult: Boolean
 * backImage: String
 * bgColor: String
 * bgImage: String
 * bm: Boolean
 * displayAuthor: String
 * frontImage: String
 * new: Boolean
 * no: Number
 * novelOriginAuthors: Array
 * painters: [{id: Number, name: String}]
 * rating: Boolean
 * rest: Boolean
 * starScore: float
 * subTitle: String
 * title: String
 * titleId: Number
 * up: Boolean
 * }
 * ]
 *
 */

interface Author {
  id: Number;
  name: String;
}

const NewWebtoonContents = new mongoose.Schema({
  adult: Boolean,
  backImage: String,
  bgColor: String,
  bgImage: String,
  bm: Boolean,
  displayAuthor: String,
  frontImage: String,
  new: Boolean,
  no: Number,
  novelOriginAuthors: Array<Author>,
  painters: Array<Author>,
  rating: Boolean,
  rest: Boolean,
  starScore: Number,
  subTitle: String,
  title: String,
  titleId: Number,
  up: Boolean,
});

const NewWebtoonListSchema = new mongoose.Schema({
  itemList: [NewWebtoonContents],
});

export default mongoose.models.NewWebtoonList ||
  mongoose.model("NewWebtoonList", NewWebtoonListSchema);
