import { connectDB } from "@/util/database";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  if (req.method == "POST") {
    return res.status(200).json(result);
  }
}
