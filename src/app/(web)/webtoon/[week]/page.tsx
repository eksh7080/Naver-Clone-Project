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

const Webtoon = () => {
  const [newToonList, setNewToonList] = useState<WebtoonListContents>([]);
  const [dbWebtoonList, setDbWebtoonList] = useState<WebtoonListAll>([]);
  const pathName = usePathname();
  const today = new Date();
  const week = today.toString().split(" ")[0];

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
            <li>gd</li>
            {/* {getSavedWebtoonList?.[ConvertTodayWeek(week)].map(
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
            )} */}
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
                <li>gd</li>
                {/* {getSavedWebtoonList?.MONDAY.map(
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
                )} */}
              </ul>
            </div>
          </div>
        </div>
      </AllWebtoonContainer>
    </>
  );
};

export default Webtoon;
