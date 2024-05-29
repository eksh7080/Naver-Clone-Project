/**
 * 파일명: SubNav.tsx
 * 설명: 헤더 서브 네비게이션 컴포넌트 (웹툰, 도전만화, 베스트도전)
 */

import { SubNavListParam } from "interfaces/NavList";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IProps {
  currentNav: string;
}
const SubNav = ({ currentNav }: IProps) => {
  const [navList, setNavList] = useState<SubNavListParam>();
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/nav", {
      method: "GET",
    });
    const data = await res.json();
    setNavList(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(navList, "리스트");

  return (
    <div className="subNav">
      <nav>
        <ul></ul>
      </nav>
    </div>
  );
};

export default SubNav;
