import React from "react";
import SubLayout from "../../layouts/SubLayout";
import DefaultLayout from "../../layouts/DefaultLayout";
import useCates from "../../hooks/useCates";
import { Link } from "react-router-dom";

const WritePage = () => {
  const [cate1, cate2] = useCates();
  return (
    <DefaultLayout>
      <SubLayout>
        <div id="board">
          <section class="write">
            <form action="#">
              <table border="0">
                <caption>글쓰기</caption>
                <tr>
                  <th>제목</th>
                  <td>
                    <input
                      type="text"
                      name="title"
                      placeholder="제목을 입력하세요."
                    />
                  </td>
                </tr>
                <tr>
                  <th>내용</th>
                  <td>
                    <textarea name="content"></textarea>
                  </td>
                </tr>
                <tr>
                  <th>파일</th>
                  <td>
                    <input type="file" name="file" />
                  </td>
                </tr>
              </table>

              <div>
                <Link to={`/board/list?cate1=${cate1}&cate2=${cate2}`} class="btn btnCancel">
                  취소
                </Link>
                <input type="submit" value="작성완료" class="btn btnComplete" />
              </div>
            </form>
          </section>
        </div>
      </SubLayout>
    </DefaultLayout>
  );
};

export default WritePage;
