/**
 * 파일명: HeaderInterface.ts
 * 설명: 헤더 데이터 인터페이스 명시 스크립트
 */

export interface HeaderGlobalNavList {
  href: string;
  name: string;
}

export interface HeaderDynamicNavList {
  href: string;
  data: string[];
}
