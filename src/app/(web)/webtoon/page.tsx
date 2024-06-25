"use client";
/**
 * 파일명: /webtoon/page.tsx
 * 설명: 웹툰 페이지
 */
import Image from "next/image";
import Link from "next/link";
import Thumnail01 from "@public/images/thumnail01.jpg";
import Thumnail02 from "@public/images/thumnail02.jpg";
import Thumnail03 from "@public/images/thumnail03.jpg";
import Thumnail04 from "@public/images/thumnail04.jpg";
import styled from "styled-components";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import WebtoonApi from "@api/_instances/WebtoonApi";
import { ConvertWeekChange } from "@utils/Webtoon";
import axios from "axios";

const AllWebtoonContainer = styled.div`
  /* 신작 웹툰 */
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
      gap: 1.2rem;
      li {
        display: flex;
        flex-direction: column;
        article.imageFrame {
          position: relative;
          width: 30rem;
          height: 17rem;
          span.circleBadge {
            position: absolute;
            display: inline-flex;
            align-items: center;
            font-size: 1.1rem;
            font-weight: 700;
            z-index: 20;
            top: 5px;
            left: 5px;
            width: 21px;
            height: 20px;
            background-color: rgb(0, 220, 100);
            border-radius: 50%;
          }
          img {
            border-radius: 0.6rem;
          }
          &::after {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            z-index: 10;
            content: "";
          }
        }
        dl.contentDescWrap {
          display: flex;
          flex-direction: column;
          padding-top: 2rem;
          gap: 0.6rem;
          dt.title {
            font-size: 1.5rem;
            font-weight: 600;
          }
          dd.author,
          dd.desc {
            font-size: 1.4rem;
            font-weight: 500;
          }
          dd.desc {
            display: -webkit-box;
            color: #666666;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            white-space: pre-wrap;
            overflow: hidden;
          }
        }
      }
    }
  }

  /* 요일별 전체 웹툰 */
  .AllWebtoonListWrap {
    margin-top: 5.4rem;
    .webtoonListTitle {
      display: flex;
      align-items: center;
      gap: 2rem;
      h2 {
        font-size: 2rem;
        font-weight: 700;
      }
      .webtoonFilter {
        button[type="button"] {
          background: none;
          border: none;
          color: #666666;
          font-size: 1.5rem;
          font-weight: 500;
        }
      }
    }

    .AllWebtoonListFrame {
      display: flex;
      border: 1px solid #ebebeb;
      .webtoonListColumn {
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          font-size: 1.6rem;
        }
        .webtoonListContent {
          li {
            width: 16rem;
            height: 20.7rem;
            &:not(:first-of-type) {
              padding-top: 2.4rem;
            }
            a {
              display: block;
              /* width: 100%;
              height: ; */
              img {
                border-radius: 0.4rem;
                &::after {
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  border: 1px solid rgba(0, 0, 0, 0.1);
                  border-radius: 4px;
                  z-index: 10;
                  content: "";
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Webtoon = () => {
  // const param = {
  //   perPage: 10,
  //   page: 1,
  //   service: "naver",
  //   updateDay: "mon",
  // };

  // const { data: WebtoonList } = useQuery({
  //   queryKey: ["getWebtoonList"],
  //   queryFn: async () => {
  //     const res = await WebtoonApi.getWebtoonList(param);
  //     return res;
  //   },
  // });

  // const { data: NaverWebtoonList } = useQuery({
  //   queryKey: ["getNaverWebtoonList"],
  //   queryFn: async () => {
  //     const res = await axios.get("http://localhost:3000/api/webtoon");
  //     return res;
  //   },
  // });

  // console.log(NaverWebtoonList, "웹툰 리스트");

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
              <article className="imageFrame">
                <span className="circleBadge">신작</span>
                <Image
                  src={Thumnail01}
                  alt="Thumnail01"
                  sizes="(max-width: 300px),(max-height: 170px)"
                  fill={true}
                  priority
                />
              </article>
              <dl className="contentDescWrap">
                <dt className="title">환생무협기</dt>
                <dd className="author">스카니아</dd>
                <dd className="desc">
                  죽음 이후 환생한곳은 무림? 이곳은 어떻게 돼먹은 곳이야!! 내가
                  이곳에서 잘 살아갈수 있을까? 적응하려는 찰나 기인을 만나게
                  되는데 제자가 되면 모든걸 다 이룰 수 있을거라고? 속는셈치고 한
                  번 믿어볼까
                </dd>
              </dl>
            </li>
            <li>
              <article className="imageFrame">
                <span className="circleBadge">신작</span>
                <Image
                  src={Thumnail02}
                  alt="Thumnail02"
                  sizes="(max-width: 300px),(max-height: 170px)"
                  fill={true}
                  priority
                />
              </article>
              <dl className="contentDescWrap">
                <dt className="title">에녹:빛나는나무</dt>
                <dd className="author">베라</dd>
                <dd className="desc">
                  “갑옷을 입은 자들은 결코 갑옷을 벗지 못하고 영원히 죽지
                  않으며, 고통 속에 살 것이다." 한 마녀의 저주로 '저주받은
                  기사'들이 세상을 배회하게 된다. 그리고 저주받은 기사를 마주친
                  소년, 에녹. 그가 겪게 되는 이야기.
                </dd>
              </dl>
            </li>
            <li>
              <article className="imageFrame">
                <span className="circleBadge">신작</span>
                <Image
                  src={Thumnail03}
                  alt="Thumnail03"
                  sizes="(max-width: 300px),(max-height: 170px)"
                  fill={true}
                  priority
                />
              </article>
              <dl className="contentDescWrap">
                <dt className="title">오늘만 사는 기사</dt>
                <dd className="author">제니스</dd>
                <dd className="desc">
                  "넌 천재다" 어릴 때 들었던 말이 독이었다. 엔크리드는 기사를
                  꿈꿨다. 헛된 꿈이라는 건 금세 알았다. "그런 실력으로 칼밥을
                  먹겠다고?" 누군가는 비웃고. "그만둬라." 누군가는 조언했다.
                  그럼에도 빛 바랜 꿈은 그대로였다. 덜 자고 더 뛰고 더 휘둘렀다.
                  그리 살던 어느 날이었다. 전장에서 목이 찔려 죽은 뒤였다. 다시
                  눈을 뜬 엔크리드는 죽기 전 '오늘' 아침에 돌아와 있었다.
                </dd>
              </dl>
            </li>
            <li>
              <article className="imageFrame">
                <span className="circleBadge">신작</span>
                <Image
                  src={Thumnail04}
                  alt="Thumnail04"
                  sizes="(max-width: 300px),(max-height: 170px)"
                  fill={true}
                  priority
                />
              </article>
              <dl className="contentDescWrap">
                <dt className="title">이기적 연애론</dt>
                <dd className="author">크로아</dd>
                <dd className="desc">
                  "넌 어떨까? 내가 다른 남자와 행복하게 있는 걸 보면." 평범한
                  30대인 '유민'과 '현도'. 모종의 이유로 각자의 연인에게 헤어짐을
                  고했지만, 사실은 누구보다 미련이 넘치는 두 사람. 전 연인이
                  자신을 붙잡아 줬으면 하는 이기적인 마음이 통한 두 사람은
                  '계획'을 세운다. 그건 바로, 가짜 데이트를 하며 서로의 전
                  연인을 자극해 보는 것! 이기적이고 어리석은 이들의 계획은
                  성공할 수 있을까?
                </dd>
              </dl>
            </li>
          </ul>
        </div>
        <div className="AllWebtoonListWrap">
          <div className="webtoonListTitle">
            <h2>요일별 전체 웹툰</h2>
            <div className="webtoonFilter">
              <button type="button">인기순</button>
              <button type="button">업데이트순</button>
              <button type="button">조회순</button>
              <button type="button">별점순</button>
            </div>
          </div>
          <div className="AllWebtoonListFrame">
            <div className="webtoonListColumn">
              <h3>월요웹툰</h3>
              <ul className="webtoonListContent">
                {/* {WebtoonList?.data.webtoons.map((list, index) => (
                  <li key={index}>
                    <Link href="#">
                      <img
                        src={list.img}
                        alt="webtoon image"
                        width={160}
                        height={207}
                      />
                    </Link>
                    <div className="webtoonAuthor">
                      <Link href="#">
                        <strong>{list.author}</strong>
                      </Link>
                    </div>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      </AllWebtoonContainer>
    </>
  );
};

export default Webtoon;
