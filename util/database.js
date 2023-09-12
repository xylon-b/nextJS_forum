import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://baejihong98:qowlghd98@cluster1.x1jisld.mongodb.net/?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  // 개발할때 파일 저장하면 모든 JS파일 코드 전부 다시 읽고 지나감
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };

// 몽고디비 만든사람이 nextJS에서 쓰려면 이렇게 쓰래~
