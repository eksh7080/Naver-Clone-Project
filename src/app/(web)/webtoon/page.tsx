"use client";
import Image from "next/image";
import Link from "next/link";
import Thumnail01 from "@public/images/thumnail01.jpg";
import Thumnail02 from "@public/images/thumnail02.jpg";
import Thumnail03 from "@public/images/thumnail03.jpg";
import Thumnail04 from "@public/images/thumnail04.jpg";

/**
 * 파일명: /webtoon/page.tsx
 * 설명: 웹툰 페이지
 */

import styled from "styled-components";

const AllWebtoonContainer = styled.div`
  .newWebtoonWrap {
    display: flex;
    flex-direction: column;
    padding-top: 1.6rem;
    gap: 2rem;
    .newWebtoonTitle {
      display: flex;
      justify-content: space-between;
      h2 {
        font-size: 2rem;
        font-weight: 700;
      }
      a {
        color: #666666;
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
    .newWebtoonList {
      display: flex;
      min-height: 26rem;
      li {
        width: 27.2rem;
      }
    }
  }
`;

const Webtoon = () => {
  return (
    <>
      <AllWebtoonContainer>
        <div className="newWebtoonWrap">
          <div className="newWebtoonTitle">
            <h2>이달의 신규 웹툰</h2>
            <Link href={"#"}>신작웹툰 더보기 {">"}</Link>
          </div>
          <ul className="newWebtoonList">
            <li>
              <span className="newBadge">신작</span>
              <Image
                src={Thumnail01}
                alt="Thumnail01"
                width={100}
                height={100}
                priority
              />
              <dl className="contentDescWrap">
                <dt>title</dt>
                <dd>author</dd>
                <dd>desc</dd>
              </dl>
            </li>
            <li>
              <Image
                src={Thumnail02}
                alt="Thumnail02"
                width={100}
                height={100}
                priority
              />
              <dl className="contentDescWrap">
                <dt>title</dt>
                <dd>author</dd>
                <dd>desc</dd>
              </dl>
            </li>
            <li>
              <Image
                src={Thumnail03}
                alt="Thumnail03"
                width={100}
                height={100}
                priority
              />
              <dl className="contentDescWrap">
                <dt>title</dt>
                <dd>author</dd>
                <dd>desc</dd>
              </dl>
            </li>
            <li>
              <Image
                src={Thumnail04}
                alt="Thumnail04"
                width={100}
                height={100}
                priority
              />
              <dl className="contentDescWrap">
                <dt>title</dt>
                <dd>author</dd>
                <dd>desc</dd>
              </dl>
            </li>
          </ul>
        </div>
        <div className="AllWebtoonWrap">
          <div className="webtoonListColumn">
            <strong></strong>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </AllWebtoonContainer>
    </>
  );
};

export default Webtoon;
