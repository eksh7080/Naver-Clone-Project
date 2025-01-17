"use client";
/**
 * 파일명: /(web)/layout.tsx
 * 설명: 웹툰 그룹화 공통 레이아웃 (헤더 추가)
 */
import Header from "@components/layout/header";
import { ReactQueryProvider } from "@lib/provider";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/ko";

// dayjs 로케일, 플러그인 설정
dayjs.locale("ko");

const WebContainer = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`;

export const AllWebtoonContainer = styled.div`
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

const WebDisplayLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ReactQueryProvider>
      <Header />
      <WebContainer>{children}</WebContainer>
    </ReactQueryProvider>
  );
};

export default WebDisplayLayout;
