"use client";
/**
 * 파일명: /(web)/layout.tsx
 * 설명: 웹툰 그룹화 공통 레이아웃 (헤더 추가)
 */
import Header from "@components/layout/header";
import styled from "styled-components";

const WebContainer = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`;

const WebDisplayLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <WebContainer>{children}</WebContainer>
    </>
  );
};

export default WebDisplayLayout;
