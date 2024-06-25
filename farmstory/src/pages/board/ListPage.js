import React from "react";
import SubLayout from "../../layouts/SubLayout";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Link } from "react-router-dom";
import useCates from "../../hooks/useCates";

const ListPage = () => {
  const [cate1, cate2] = useCates();

  return (
    <DefaultLayout>
      <SubLayout>
        <div id="board">
          <section className="list">
            <table border="0">
              <caption>글목록</caption>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
                <th>조회</th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <Link to={`/board/view?cate1=${cate1}&cate2=${cate2}`}>테스트 제목입니다.[3]</Link>
                </td>
                <td>길동이</td>
                <td>20-05-12</td>
                <td>12</td>
              </tr>
            </table>

            <div className="page">
              <Link to="#" className="prev">
                이전
              </Link>
              <Link to="#" className="num current">
                1
              </Link>
              <Link to="#" className="num">
                2
              </Link>
              <Link to="#" className="num">
                3
              </Link>
              <Link to="#" className="next">
                다음
              </Link>
            </div>

            <Link
              to={`/board/write?cate1=${cate1}&cate2=${cate2}`}
              class="btn btnWrite"
            >
              글쓰기
            </Link>
          </section>
        </div>
      </SubLayout>
    </DefaultLayout>
  );
};

export default ListPage;
