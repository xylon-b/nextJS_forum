import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      <h4 className="title-list">글목록</h4>
      {result.map((a, i) => {
        return (
          <div className="list-item">
            <h4>{result[i].title}</h4>
            <p>{result[i].content}</p>
          </div>
        );
      })}
    </div>
  );
}
