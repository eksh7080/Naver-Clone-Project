/**
 * 파일명: header.tsx
 * 설명: 헤더 공통 컴포넌트
 * 구성요소: GlobalNav.tsx, SubNav.tsx
 */
"use client";
import styled from "styled-components";
import GlobalNav from "./nav/GlobalNav";
import SubNav from "./nav/SubNav";
import SubNavList from "@db/SubNavList.json";
import { useEffect, useState } from "react";
import { HeaderDynamicNavList } from "@interfaces/HeaderInterface";

const HeaderContainer = styled.header`
  max-width: 100%;
  width: 100%;
  /* 위 아래 공통속성 */
  div:where(.top, .bottom, .subNav) {
    border-bottom: 0.1rem solid #ebebeb;
    nav {
      max-width: 1240px;
      width: 100%;
      margin: 0 auto;
      ul {
        display: flex;
        align-items: center;
        height: 100%;
        li {
          cursor: pointer;
          a {
            display: inline-block;
            padding: 2rem;
            width: 100%;
            height: 100%;
          }
          &.active {
            background-color: #00c855;
            a {
              color: white;
            }
          }
        }
      }
    }
  }
  .top {
    nav {
      ul {
        justify-content: space-between;
        li {
          font-size: 2.4rem;
          font-weight: 900;
          div.searchBox {
            position: relative;
            width: 27rem;
            border: 0.1rem solid#e0e0e0;
            input[type="text"] {
              width: 100%;
              height: 100%;
              text-indent: 1rem;
              padding: 1rem 0;
            }
            button[type="button"] {
              position: absolute;
              border: none;
              background: none;
              right: 12px;
              top: 4px;
              width: 24px;
              height: 24px;
            }
          }
          a {
            span {
              display: inline-block;
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
  .bottom {
    nav {
      ul {
        gap: 0.4rem;
        li {
          font-size: 1.6rem;
          font-weight: 600;
        }
      }
    }
  }
  .subNav {
    nav {
      ul {
        li {
          font-size: 1.5rem;
          font-weight: 600;
          &.focus {
            border-bottom: 1px solid #00dc64;
            color: #00dc64;
          }
        }
      }
    }
  }
`;

const Header = () => {
  const [changeNavHref, setChangeNavHref] = useState("");
  const [headerNavList, setHeaderNavList] =
    useState<HeaderDynamicNavList[]>(SubNavList);

  useEffect(() => {
    setHeaderNavList(SubNavList);
  }, [changeNavHref]);

  return (
    <HeaderContainer>
      <GlobalNav setChangeNavHref={setChangeNavHref} />
      <SubNav headerNavList={headerNavList} />
    </HeaderContainer>
  );
};

export default Header;
