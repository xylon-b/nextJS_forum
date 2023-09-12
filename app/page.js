import Image from "next/image";
import styles from "./page.module.css";
import { MongoClient } from "mongodb";
import { connectDB } from "@/util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");

  let result = await db.collection("post").find().toArray();
  console.log(result);

  return <div>안녕!</div>;
}
