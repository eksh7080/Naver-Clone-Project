/**
 * 파일명: /(web)/layout.tsx
 * 설명: 웹툰 그룹화 공통 레이아웃 (헤더 추가)
 */
import Header from "components/layout/header";

const WebDisplayLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default WebDisplayLayout;
