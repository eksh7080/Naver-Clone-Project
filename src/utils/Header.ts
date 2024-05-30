/**
 * 파일명: /utils/Header.ts
 * 설명: 헤더 관련 유틸함수 모아놓은 스크립트
 */

import { usePathname } from "next/navigation";

// 글로벌 네비게이션 배경 하이라이트 체크 함수
export const activeCheck = (path: string) => {
  const pathName = usePathname();
  return path === pathName ? true : false;
};

// 서브 네비게이션 표시 유무 체크 함수
export const navCheck = () => {
  const pathName = usePathname();
  return pathName !== "/comic" ? true : false;
};
