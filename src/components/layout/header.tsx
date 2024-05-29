/**
 * 파일명: header.tsx
 * 설명: 헤더 공통 컴포넌트
 * 구성요소: GlobalNav.tsx, SubNav.tsx
 */

"use client";
import styled from "styled-components";
import Link from "next/link";
import GlobalNav from "./nav/GlobalNav";
import SubNav from "./nav/SubNav";
import { useUrlPathNameCheck } from "hooks/useUrlPathNameCheck";
import { navCheck } from "utils/Header";
import { useRef } from "react";

const HeaderContainer = styled.header`
  max-width: 100%;
  width: 100%;

  /* 위 아래 공통속성 */
  div:where(.top, .bottom) {
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
          padding: 2rem;
          &.active {
            background-color: #00c855;
            a {
              cursor: pointer;
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
`;

const Header = () => {
  const globalNavLi = useRef<HTMLUListElement>(null);
  console.log(globalNavLi.current?.children, "네브");
  return (
    <HeaderContainer>
      <GlobalNav globalNavLi={globalNavLi} />
      {navCheck() && <SubNav />}
    </HeaderContainer>
  );
};

export default Header;
