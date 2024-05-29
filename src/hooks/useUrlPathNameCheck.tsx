/**
 * 파일명: useUrlPathNameCheck.tsx
 * 설명: app router pathname과 내가 현재 위치한 경로가 맞는지 판별해주는 usehook
 */

import { usePathname } from "next/navigation";

const useUrlPathNameCheck = (path: string) => {
  const pathName = usePathname();
  return path === pathName ? true : false;
};

export default useUrlPathNameCheck;
