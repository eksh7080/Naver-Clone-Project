"use client";
/**
 * 파일명: /webtoon/page.tsx
 * 설명: 웹툰 페이지
 */
import Image from "next/image";
import Link from "next/link";
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
import {
  NewWebtoonList,
  NewWebtoonListContents,
  WebtoonListAll,
  WebtoonListContents,
  getNewWebtoonListParam,
} from "@interfaces/WebtoonList";
import { usePathname } from "next/navigation";
import { NewWebtoon } from "@components/webtoon/NewWebtoonBox";

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
        width: 272px;
        article.imageFrame {
          position: relative;
          display: flex;
          justify-content: center;
          width: 27.2rem;
          height: 16.5rem;
          span.circleBadge {
            position: absolute;
            display: inline-flex;
            align-items: center;
            justify-content: center;
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
            position: absolute;
            border-radius: 0.6rem;
            bottom: 1px;
            &.frontImg {
              z-index: 20;
            }
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
            -webkit-line-clamp: 2;
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
        &:not(:last-of-type) {
          border-right: 1px solid #ebebeb;
        }
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

  // const param: getNewWebtoonListParam = {
  //   // 66c1eb29b41a3725ec17b4ee 요일전체
  //   week: "undefined",
  //   tag: "false",
  //   sortByUpdate: "false",
  // };
  // const { data: getNewWebtoonList } = useQuery<NewWebtoonList>({
  //   queryKey: ["getNewNaverWebtoons"],
  //   queryFn: async () => {
  //     const res = await WebtoonApi.getNaverNewWebtoonList(param);
  //     return res.data;
  //   },
  // });

  // console.log(getNewWebtoonList, "new");

  // const { data: NaverSavedNewList } = useQuery({
  //   queryKey: ["saveNewNaverWebtoonList"],
  //   queryFn: async () => {
  //     const res = await axios.post(
  //       "http://localhost:3000/api/newWebtoon",
  //       getNewWebtoonList,
  //     );
  //     return res.data;
  //   },
  //   enabled: !!getNewWebtoonList,
  // });

  // console.log(NaverSavedNewList, "save");

  const { data: getSavedNewWebtoonList, isFetching: newWebtoonListFetcing } =
    useQuery<NewWebtoonList>({
      queryKey: ["getSavedDbNewWebtoons"],
      queryFn: async () => {
        const res = await WebtoonApi.getDbNewWebtoonList();
        return res.data;
      },
    });

  console.log(getSavedNewWebtoonList);

  const { data: getSavedWebtoonList, isFetching: webtoonListFetcing } =
    useQuery<WebtoonListAll>({
      queryKey: ["getSavedNaverWebtoons"],
      queryFn: async () => {
        const res = await WebtoonApi.getNaverWebtoonList();
        return res.data;
      },
    });

  return (
    <>
      <AllWebtoonContainer>
        <NewWebtoon>
          <NewWebtoon.Title title={"이달의 신규 웹툰"} etc={true} />
          <NewWebtoon.List itemList={getSavedNewWebtoonList?.itemList} />
        </NewWebtoon>
        {/* <div className="newWebtoonWrap">
          <div className="newWebtoonTitle">
            <h2>이달의 신규 웹툰</h2>
            <Link href={"#"}>신작웹툰 더보기 {">"}</Link>
          </div>
          <ul className="newWebtoonList">
            {getSavedNewWebtoonList?.itemList.map(
              (item: NewWebtoonListContents, index) => (
                <Fragment key={item._id}>
                  <li>
                    <article
                      className="imageFrame"
                      style={{ background: `#${item.bgColor}` }}
                    >
                      <span className="circleBadge">신작</span>
                      <img
                        src={item.bgImage}
                        alt="뒷 배경 이미지"
                        sizes="(max-width: 300px),(max-height: 170px)"
                        width={"237px"}
                        height={"164px"}
                      />
                      {item.backImage !== "" && (
                        <img
                          src={item.backImage}
                          alt="배경 이미지"
                          sizes="(max-width: 300px),(max-height: 170px)"
                          width={"207px"}
                          height={"164px"}
                        />
                      )}
                      <img
                        className="frontImg"
                        src={item.frontImage}
                        alt="프론트 이미지"
                        sizes="(max-width: 300px),(max-height: 170px)"
                        width={"226px"}
                        height={"181px"}
                      />
                    </article>
                    <dl className="contentDescWrap">
                      <dt className="title">{item.title}</dt>
                      <dd className="author">{item.displayAuthor}</dd>
                      <dd className="desc">{item.summary}</dd>
                    </dl>
                  </li>
                </Fragment>
              ),
            )}
          </ul>
        </div> */}
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
            <div className="webtoonListColumn">
              <h3>일요웹툰</h3>
              <ul className="webtoonListContent">
                {getSavedWebtoonList?.SUNDAY.map(
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
