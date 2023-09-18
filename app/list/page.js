import { connectDB } from "@/util/database";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      <h4 className="title-list">글목록</h4>

      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <h4>
              <Link href={"../detail/" + result[i]._id}>{result[i].title}</Link>
            </h4>
            <DetailLink></DetailLink>
            <p>{result[i].content}</p>
          </div>
        );
      })}
    </div>
  );
}
