"use client";
/**
 * 파일명: /comic/page.tsx
 * 설명: 웹툰 홈 페이지
 */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Comic = () => {
  const { data: ScrapeData } = useQuery({
    queryKey: ["scrape"],
    queryFn: async () => {
      const res = axios.get("http://localhost:3000/api/webtoon");
      return res;
    },
  });

  console.log(ScrapeData, " 스크랩 데이터");

  return (
    <>
      <h1>이곳은 웹툰 홈입니다.</h1>
    </>
  );
};

export default Comic;
