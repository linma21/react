import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <>
      <div class="info">
        <div>
          <img
            src="./images/main_sub2_cs_tit.png"
            class="tit"
            alt="고객센터 안내"
          />
          <div class="tel">
            <img src="./images/main_sub2_cs_img.png" alt="" />
            <img src="./images/main_sub2_cs_txt.png" alt="1666-777" />
            <p class="time">
              평일: AM 09:00 ~ PM 06:00
              <br />
              점심: PM 12:00 ~ PM 01:00
              <br />
              토, 일요일, 공휴일 휴무
            </p>
          </div>
          <div class="btns">
            <Link href="#">
              <img src="./images/main_sub2_cs_bt1.png" alt="1:1 고객문의" />
            </Link>
            <Link href="#">
              <img src="./images/main_sub2_cs_bt2.png" alt="자주묻는질문" />
            </Link>
            <Link href="#">
              <img src="./images/main_sub2_cs_bt3.png" alt="배송조회" />
            </Link>
          </div>
        </div>
        <div>
          <img
            src="./images/main_sub2_account_tit.png"
            class="tit"
            alt="계좌안내"
          />
          <p class="account">
            기업은행 123-456789-01-01-012
            <br />
            국민은행 01-1234-56789
            <br />
            우리은행 123-456789-01-01-012
            <br />
            하나은행 123-456789-01-01
            <br />예 금 주 (주)팜스토리
          </p>
        </div>
        <div>
          <div id="tabs">
            <ul>
              <li>
                <Link href="#tabs-1">공지사항</Link>
              </li>
              <li>
                <Link href="#tabs-2">1:1 고객문의</Link>
              </li>
              <li>
                <Link href="#tabs-3">자주묻는 질문</Link>
              </li>
            </ul>
            <div id="tabs-1">
              <ul class="txt">
                <li>
                  <Link href="#">· 홈페이지 오픈 기념 이벤트를 진행합니다.</Link>
                </li>
                <li>
                  <Link href="#">· 홈페이지 오픈 기념 이벤트를 진행합니다.</Link>
                </li>
                <li>
                  <Link href="#">· 홈페이지 오픈 기념 이벤트를 진행합니다.</Link>
                </li>
              </ul>
            </div>
            <div id="tabs-2">
              <ul class="txt">
                <li>
                  <Link href="#">· 홈페이지 이용 관련 불편사항을 들려주세요.</Link>
                </li>
                <li>
                  <Link href="#">· 홈페이지 이용 관련 불편사항을 들려주세요.</Link>
                </li>
                <li>
                  <Link href="#">· 홈페이지 이용 관련 불편사항을 들려주세요.</Link>
                </li>
              </ul>
            </div>
            <div id="tabs-3">
              <ul class="txt">
                <li>
                  <Link href="#">· 홈페이지를 오픈하였습니다.</Link>
                </li>
                <li>
                  <Link href="#">· 홈페이지를 오픈하였습니다.</Link>
                </li>
                <li>
                  <Link href="#">· 홈페이지를 오픈하였습니다.</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
