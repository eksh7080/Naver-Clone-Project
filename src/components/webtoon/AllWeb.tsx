'use client';
import { WebtoonListAll, WebtoonListContents } from '@interfaces/WebtoonList';
import { useEffect, useState } from 'react';

interface IProps {
  allWebtoonList: WebtoonListAll;
}

const AllWeb = ({ allWebtoonList }: IProps) => {
  const [list, setList] = useState<WebtoonListAll>();

  useEffect(() => {
    if (!allWebtoonList) return;
    setList(allWebtoonList);
  }, [allWebtoonList]);

  console.log(list, ' list');
  console.log(allWebtoonList, ' all');
  return (
    <div className="AllWebtoonListWrap">
      <div className="webtoonListTitle">
        <h2>요일별 전체 웹툰</h2>
        <div className="webtoonFilter">
          <button type="button">인기순</button>
          <button type="button">업데이트순</button>
          <button type="button">조회순</button>
          <button type="button">별점순</button>
        </div>
      </div>
      {allWebtoonList ? (
        <div className="AllWebtoonListFrame">
          <div className="webtoonListColumn">
            <h3>월요웹툰</h3>
            <ul className="webtoonListContent">
              {allWebtoonList.MONDAY.map((item: WebtoonListContents, index) => (
                <li key={item._id}>
                  <article>
                    <img src={item.thumbnailUrl} alt="썸네일" />
                  </article>
                  <div>
                    <strong>{item.titleName}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="webtoonListColumn">
            <h3>화요웹툰</h3>
            <ul className="webtoonListContent">
              {allWebtoonList.TUESDAY.map((item: WebtoonListContents, index) => (
                <li key={item._id}>
                  <article>
                    <img src={item.thumbnailUrl} alt="썸네일" />
                  </article>
                  <div>
                    <strong>{item.titleName}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="webtoonListColumn">
            <h3>수요웹툰</h3>
            <ul className="webtoonListContent">
              {allWebtoonList.WEDNESDAY.map((item: WebtoonListContents, index) => (
                <li key={item._id}>
                  <article>
                    <img src={item.thumbnailUrl} alt="썸네일" />
                  </article>
                  <div>
                    <strong>{item.titleName}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="webtoonListColumn">
            <h3>목요웹툰</h3>
            <ul className="webtoonListContent">
              {allWebtoonList.THURSDAY.map((item: WebtoonListContents, index) => (
                <li key={item._id}>
                  <article>
                    <img src={item.thumbnailUrl} alt="썸네일" />
                  </article>
                  <div>
                    <strong>{item.titleName}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="webtoonListColumn">
            <h3>금요웹툰</h3>
            <ul className="webtoonListContent">
              {allWebtoonList.FRIDAY.map((item: WebtoonListContents, index) => (
                <li key={item._id}>
                  <article>
                    <img src={item.thumbnailUrl} alt="썸네일" />
                  </article>
                  <div>
                    <strong>{item.titleName}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="webtoonListColumn">
            <h3>토요웹툰</h3>
            <ul className="webtoonListContent">
              {allWebtoonList.SATURDAY.map((item: WebtoonListContents, index) => (
                <li key={item._id}>
                  <article>
                    <img src={item.thumbnailUrl} alt="썸네일" />
                  </article>
                  <div>
                    <strong>{item.titleName}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="webtoonListColumn">
            <h3>일요웹툰</h3>
            <ul className="webtoonListContent">
              {allWebtoonList?.SUNDAY.map((item: WebtoonListContents, index) => (
                <li key={item._id}>
                  <article>
                    <img src={item.thumbnailUrl} alt="썸네일" />
                  </article>
                  <div>
                    <strong>{item.titleName}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
};

export default AllWeb;
