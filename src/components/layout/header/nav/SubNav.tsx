/**
 * 파일명: SubNav.tsx
 * 설명: 헤더 서브 네비게이션 컴포넌트 (웹툰, 도전만화, 베스트도전)
 */

import { HeaderDynamicNavList } from "@interfaces/HeaderInterface";
import Link from "next/link";

interface IProps {
  changeNavHref: string;
  headerNavList: HeaderDynamicNavList[];
}

const SubNav = ({ changeNavHref, headerNavList }: IProps) => {
  console.log(changeNavHref, "체인지 네브 경로 - 2222222", headerNavList);

  return (
    <div className="subNav">
      <nav>
        <ul>
          {headerNavList
            .find(item => item.href === changeNavHref)
            ?.data.map((list, index) => (
              <li key={index}>
                <Link href="">{list}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default SubNav;
