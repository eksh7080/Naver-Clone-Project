import mongoose from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGO_DB_URL;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  };
  mongoose
    .connect(MONGODB_URI, opts)
    .then(() => {
      console.log("몽고 DB 연결 성공");
    })
    .catch(err => console.log(err, "연결 실패"));
  // if (cached.conn) {
  //   return cached.conn;
  // }
  // if (!cached.promise) {
  //   const opts = {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     bufferCommands: false,
  //   };
  //   cached.promise = mongoose
  //     .connect(MONGODB_URI, opts)
  //     .then(() => {
  //       console.log("몽고 DB 연결 성공");
  //     })
  //     .catch(err => console.log(err, "연결 실패"));
  // }
  // cached.conn = await cached.promise;
  // return cached.conn;
}

export default connectDB;
