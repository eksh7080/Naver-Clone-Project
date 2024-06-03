"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import NAVER from "@public/images/naverLogo.png";
import GoogleIcon from "@components/icon/GoogleIcon";
import NaverLogin from "@public/images/naver.png";
import KaKaoLogin from "@public/images/kakao.png";

const HomeContainer = styled.section`
  max-width: 100%;
  width: 100%;
`;

const HomeHeader = styled.header`
  max-width: 100%;
  width: 100%;
  div:where(.selectWrap, .mainLogo) {
    width: 743px;
    margin: 0 auto;
    text-align: center;
  }
  .selectWrap {
    display: flex;
    justify-content: flex-end;
    padding-top: 4rem;
    select {
      padding: 1rem;
    }
  }
  .mainLogo {
    padding: 6rem 0;
    a {
      img {
        cursor: pointer;
      }
    }
  }
`;

const LoginBox = styled.div`
  .loginWrap {
    width: 460px;
    margin: 0 auto;
    .socialLoginWrap {
      padding: 2rem;
      border: 0.1rem solid #c6c6c6;
      border-radius: 0.6rem;
      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          button,
          img {
            cursor: pointer;
          }
          button[type="button"] {
            border: 0;
          }
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <div className="selectWrap">
          <select>
            <option>한국어</option>
            <option>English</option>
            <option>중국어</option>
            <option>???</option>
          </select>
        </div>
        <div className="mainLogo">
          <Link href="/">
            <Image
              src={NAVER}
              alt="네이버 로고"
              width={155}
              height={30}
              priority
            />
          </Link>
        </div>
      </HomeHeader>
      <LoginBox>
        <div className="loginWrap">
          <div className="socialLoginWrap">
            <ul>
              <li>
                <button type="button">
                  <GoogleIcon />
                </button>
              </li>
              <li>
                <Image
                  src={NaverLogin}
                  width={256}
                  height={68}
                  alt="네이버 로그인 버튼"
                  priority
                />
              </li>
              <li>
                <Image
                  src={KaKaoLogin}
                  width={183}
                  height={45}
                  alt="카카오 로그인 버튼"
                  priority
                />
              </li>
            </ul>
          </div>
        </div>
      </LoginBox>
    </HomeContainer>
  );
}
