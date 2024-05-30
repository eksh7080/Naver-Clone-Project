/**
 * 파일명: SubNav.tsx
 * 설명: 헤더 서브 네비게이션 컴포넌트 (웹툰, 도전만화, 베스트도전)
 */
import { SubNavListParam } from "interfaces/HeaderInterface";
import Link from "next/link";
import { useEffect, useState } from "react";

const SubNav = () => {
  const [navList, setNavList] = useState<SubNavListParam>({
    href: "",
    list: [],
  });

  return (
    <div className="subNav">
      <nav>
        <ul>
          {/* {navList.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))} */}
          <li>sdfasdfsadfsadf</li>
          <li>sdfasdfsadfsadf</li>
          <li>sdfasdfsadfsadf</li>
          <li>sdfasdfsadfsadf</li>
        </ul>
      </nav>
    </div>
  );
};

export default SubNav;
