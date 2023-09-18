export default function Write() {
  return (
    <div>
      <h4>글 작성하기</h4>
      <form action="/api/list" method="POST">
        <button type="submit">버튼</button>
      </form>
      <h4>현재 시간 보기</h4>
      <form action="/api/date" method="POST">
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
