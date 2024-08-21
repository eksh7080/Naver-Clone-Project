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
  const [nav, setNav] = useState("");

  const onFocusNav = (list: string) => {
    setNav(list);
  };

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
                  href={{
                    pathname: "/webtoon",
                    query:
                      list === "요일전체" ? {} : { tab: convertWeekDay(list) },
                  }}
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
