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
import { Fragment, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import WebtoonApi from "@api/_instances/WebtoonApi";
import {
  ConvertTodayWeek,
  ConvertWeekChange,
  filterTodayNewWebtoon,
} from "@utils/Webtoon";
import axios from "axios";
import dayjs from "dayjs";
import { WebtoonListAll, WebtoonListContents } from "@interfaces/WebtoonList";
import { usePathname } from "next/navigation";

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
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          font-size: 1.6rem;
        }
        .webtoonListContent {
          li {
            width: 160px;
            &:not(:first-of-type) {
              padding-top: 2.4rem;
            }
            article {
              width: 16rem;
              height: 20.7rem;
              img {
                border-radius: 4px;
                width: 100%;
                height: 100%;
              }
            }
            div {
              line-height: 3.6rem;
              strong {
                display: -webkit-box;
                font-size: 15px;
                font-weight: 600;
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
    }
  }
`;

const Webtoon = () => {
  const [newToonList, setNewToonList] = useState<WebtoonListContents>([]);
  const [dbWebtoonList, setDbWebtoonList] = useState<WebtoonListAll>([]);
  const pathName = usePathname();
  const today = new Date();
  const week = today.toString().split(" ")[0];

  // const { data: NaverWebtoonList } = useQuery({
  //   queryKey: ["getNaverWebtoonList"],
  //   queryFn: async () => {
  //     const res = await axios.get("http://localhost:3000/api/webtoon");
  //     return res;
  //   },
  // });

  // const { data: NaverSavedList } = useQuery({
  //   queryKey: ["saveNaverWebtoonList"],
  //   queryFn: async () => {
  //     const res = await axios.post(
  //       "http://localhost:3000/api/webtoon",
  //       NaverWebtoonList,
  //     );
  //     return res.data;
  //   },
  //   enabled: !!NaverWebtoonList,
  // });

  // console.log(NaverWebtoonList, "웹툰 리스트");
  // console.log(NaverSavedList, "저장 웹툰 리스트");

  const { data: getSavedWebtoonList } = useQuery<WebtoonListAll>({
    queryKey: ["getSavedNaverWebtoons"],
    queryFn: async () => {
      const res = await WebtoonApi.getNaverWebtoonList();
      return res.data;
    },
  });

  return (
    <>
      <AllWebtoonContainer>
        <div className="newWebtoonWrap">
          <div className="newWebtoonTitle">
            <h2>이달의 신규 웹툰</h2>
            <Link href={"#"}>신작웹툰 더보기 {">"}</Link>
          </div>
          <ul className="newWebtoonList">
            {getSavedWebtoonList?.[ConvertTodayWeek(week)].map(
              (item: WebtoonListContents, index) => (
                <Fragment key={item._id}>
                  {index < 4 && (
                    <li>
                      <article className="imageFrame">
                        <span className="circleBadge">신작</span>
                        <img
                          src={item.thumbnailUrl}
                          alt="썸네일"
                          sizes="(max-width: 300px),(max-height: 170px)"
                          width={"100%"}
                          height={"100%"}
                        />
                      </article>
                      <dl className="contentDescWrap">
                        <dt className="title">{item.titleName}</dt>
                        <dd className="author">{item.author}</dd>
                        <dd className="desc">
                          죽음 이후 환생한곳은 무림? 이곳은 어떻게 돼먹은
                          곳이야!! 내가 이곳에서 잘 살아갈수 있을까? 적응하려는
                          찰나 기인을 만나게 되는데 제자가 되면 모든걸 다 이룰
                          수 있을거라고? 속는셈치고 한 번 믿어볼까
                        </dd>
                      </dl>
                    </li>
                  )}
                </Fragment>
              ),
            )}
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
                {getSavedWebtoonList?.MONDAY.map(
                  (item: WebtoonListContents, index) => (
                    <li key={item._id}>
                      <article>
                        <img src={item.thumbnailUrl} alt="썸네일" />
                      </article>
                      <div>
                        <strong>{item.titleName}</strong>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="webtoonListColumn">
              <h3>화요웹툰</h3>
              <ul className="webtoonListContent">
                {getSavedWebtoonList?.TUESDAY.map(
                  (item: WebtoonListContents, index) => (
                    <li key={item._id}>
                      <article>
                        <img src={item.thumbnailUrl} alt="썸네일" />
                      </article>
                      <div>
                        <strong>{item.titleName}</strong>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="webtoonListColumn">
              <h3>수요웹툰</h3>
              <ul className="webtoonListContent">
                {getSavedWebtoonList?.WEDNESDAY.map(
                  (item: WebtoonListContents, index) => (
                    <li key={item._id}>
                      <article>
                        <img src={item.thumbnailUrl} alt="썸네일" />
                      </article>
                      <div>
                        <strong>{item.titleName}</strong>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="webtoonListColumn">
              <h3>목요웹툰</h3>
              <ul className="webtoonListContent">
                {getSavedWebtoonList?.THURSDAY.map(
                  (item: WebtoonListContents, index) => (
                    <li key={item._id}>
                      <article>
                        <img src={item.thumbnailUrl} alt="썸네일" />
                      </article>
                      <div>
                        <strong>{item.titleName}</strong>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="webtoonListColumn">
              <h3>금요웹툰</h3>
              <ul className="webtoonListContent">
                {getSavedWebtoonList?.FRIDAY.map(
                  (item: WebtoonListContents, index) => (
                    <li key={item._id}>
                      <article>
                        <img src={item.thumbnailUrl} alt="썸네일" />
                      </article>
                      <div>
                        <strong>{item.titleName}</strong>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="webtoonListColumn">
              <h3>토요웹툰</h3>
              <ul className="webtoonListContent">
                {getSavedWebtoonList?.SATURDAY.map(
                  (item: WebtoonListContents, index) => (
                    <li key={item._id}>
                      <article>
                        <img src={item.thumbnailUrl} alt="썸네일" />
                      </article>
                      <div>
                        <strong>{item.titleName}</strong>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </AllWebtoonContainer>
    </>
  );
};

export default Webtoon;
