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
import { navCheck } from "utils/Header";
import { useEffect, useRef, useState } from "react";
import { HeaderNavListInterface } from "interfaces/HeaderInterface";

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
`;

const Header = () => {
  const [changeNavHref, setChangeNavHref] = useState("");
  const [headerNavList, setHeaderNavList] = useState<HeaderNavListInterface[]>(
    [],
  );

  async function getData() {
    const res = await fetch("http://localhost:3000/api/header", {
      method: "GET",
    }).then(result => result.json());

    // const findNavList: HeaderNavListInterface = res.filter(
    //   item => item.href === changeNavHref,
    // );
    // setHeaderNavList(findNavList);
    // console.log(res, "네브리스트 - 00000", findNavList);
  }

  useEffect(() => {
    getData();
  }, [changeNavHref]);

  console.log(headerNavList, "헤더 네브 릿그트 -==- -00000");

  return (
    <HeaderContainer>
      <GlobalNav setChangeNavHref={setChangeNavHref} />
      <SubNav changeNavHref={changeNavHref} headerNavList={headerNavList} />
    </HeaderContainer>
  );
};

export default Header;
