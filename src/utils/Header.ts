/**
 * 파일명: /utils/Header.ts
 * 설명: 헤더 관련 유틸함수 모아놓은 스크립트
 */

import { usePathname } from "next/navigation";

export const activeCheck = (path: string) => {
  const pathName = usePathname();
  return path === pathName ? true : false;
};

export const navCheck = () => {
  const pathName = usePathname();
  return pathName !== "/comic" ? true : false;
};
