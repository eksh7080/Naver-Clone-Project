/**
 * 파일명: SubNav.tsx
 * 설명: 헤더 서브 네비게이션 컴포넌트 (웹툰, 도전만화, 베스트도전)
 */

import Link from "next/link";
import { useState } from "react";

const SubNav = () => {
  const [navList, setNavList] = useState();

  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/nav", {
      method: "GET",
    });
    const data = await res.json();
    setNavList(data);
  };

  return (
    <div className="subNav">
      <nav>
        <ul>
          <li>sadfasdfsadf</li>
          <li>sadfasdfsadf</li>
          <li>sadfasdfsadf</li>
          <li>sadfasdfsadf</li>
          <li>sadfasdfsadf</li>
        </ul>
      </nav>
    </div>
  );
};

export default SubNav;
