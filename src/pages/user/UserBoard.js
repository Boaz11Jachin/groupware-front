import { Link } from "react-router";

function UserBoardPage() {
  const dummy = [
    {
      id: 1,
      writer: "윤형호",
      title: "테스트중입니다",
      wroteAt: "2025-05-01T15:48:17.627284300",
    },
    {
      id: 2,
      writer: "윤형호",
      title: "테스트중입니다",
      wroteAt: "2025-05-01T15:48:17.627284300",
    },
    {
      id: 3,
      writer: "윤형호",
      title: "테스트중입니다",
      wroteAt: "2025-05-01T15:48:17.627284300",
    },
  ];

  return (
    <div className="user-board">
      <h2>사원 대시보드 &gt;게시판</h2>
      <p>
        업무에 도움이 될 만한 이야기, 아이디어, 질문을 자유롭게 나누는
        공간입니다. 서로의 생각을 존중하며 건설적인 소통을 이어가 주세요.
      </p>
      <div>
        <Link to="/user/workspace/board/write">글쓰기</Link>
      </div>
      <>
        <table>
          <thead>
            <tr>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {dummy.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.writer}</td>
                <td>{item.wroteAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default UserBoardPage;
