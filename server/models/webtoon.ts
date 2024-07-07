import mongoose from "mongoose";

const WebtoonSchema = new mongoose.Schema({
  name: String,
  email: String,
});

export default mongoose.models.Webtoon ||
  mongoose.model("Webtoon", WebtoonSchema);
