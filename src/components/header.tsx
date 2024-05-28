"use client";
import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

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
          padding: 2rem;
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
        li {
          font-size: 2.4rem;
          font-weight: 900;
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
  const checkActive = usePathname();
  const checkFun = (path: string) => {
    console.log(path, " nav nav nav ", checkActive);
    return path === checkActive ? true : false;
  };
  const navigationList = [
    { href: "/comic", name: "홈" },
    { href: "/webtoon", name: "웹툰" },
    { href: "/bestChallenge", name: "베스트도전" },
    { href: "/challenge", name: "도전만화" },
  ];

  return (
    <HeaderContainer>
      <div className="top">
        <nav>
          <ul>
            <li>
              <Link href="/comic">
                <span>NAVER</span> 웹툰
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bottom">
        <nav>
          <ul>
            {navigationList.map(({ href, name }) => (
              <li key={name} className={checkFun(href) ? "active" : ""}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
