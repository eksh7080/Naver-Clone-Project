/**
 * 파일명: SubNav.tsx
 * 설명: 헤더 서브 네비게이션 컴포넌트 (웹툰, 도전만화, 베스트도전)
 */

import { HeaderDynamicNavList } from "@interfaces/HeaderInterface";
import { convertWeekDay, isActiveNavCheck } from "@utils/Header";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IProps {
  headerNavList: HeaderDynamicNavList[];
}

const SubNav = ({ headerNavList }: IProps) => {
  const pathName = usePathname();
  const searchParam = useSearchParams();
  const [nav, setNav] = useState("요일전체");

  const onFocusNav = (list: string) => {
    setNav(list);
  };

  console.log(nav);

  return (
    <div className="subNav">
      <nav>
        <ul>
          {headerNavList
            .find(item => item.href === pathName)
            ?.data.map((list, index) => (
              <li
                key={index}
                onClick={() => onFocusNav(list)}
                className={nav === list ? "focus" : ""}
              >
                <Link
                  href={`/webtoon/${list === "요일전체" ? "" : convertWeekDay(list)}`}
                >
                  {list}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default SubNav;
