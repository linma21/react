import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout';
import { Link } from 'react-router-dom';

const TermsPage = () => {
  return (
  <DefaultLayout>
    <div id="user">
            <section class="terms">
                <table>
                    <caption>사이트 이용약관</caption>
                    <tr>
                        <td>
                            <textarea readonly>약관내용</textarea>
                            <p>
                                <label><input type="checkbox" name="chk1"/>동의합니다.</label>
                            </p>
                        </td>
                    </tr>
                </table>
                <table>
                    <caption>개인정보 취급방침</caption>
                    <tr>
                        <td>
                            <textarea readonly>개인정보 내용</textarea>
                            <p>
                                <label><input type="checkbox" name="chk2"/>동의합니다.</label>
                            </p>
                        </td>
                    </tr>
                </table>
                <div>
                    <Link to="#" class="btnCancel">취소</Link>
                    <Link to="#" class="btnNext">다음</Link>
                </div>
            </section>
        </div>
  </DefaultLayout>
  )
}

export default TermsPage;