"use client";
import { Fragment } from "react";
import Link from "next/link";
import { NewWebtoonList, NewWebtoonListContents } from "@interfaces/WebtoonList";

const NewWeb = ({ newWebtoonList }: NewWebtoonList) => {
  return (
    <div className="newWebtoonWrap">
      <div className="newWebtoonTitle">
        <h2>이달의 신규 웹툰</h2>
        <Link href={"#"}>신작웹툰 더보기 {">"}</Link>
      </div>
      <ul className="newWebtoonList">
        {newWebtoonList.itemList.map((item: NewWebtoonListContents, index) => (
          <Fragment key={item._id}>
            <li>
              <article
                className="imageFrame"
                style={{ background: `#${item.bgColor}` }}
              >
                <span className="circleBadge">신작</span>
                <img
                  src={item.bgImage}
                  alt="뒷 배경 이미지"
                  sizes="(max-width: 300px),(max-height: 170px)"
                  width={"237px"}
                  height={"164px"}
                />
                {item.backImage !== "" && (
                  <img
                    src={item.backImage}
                    alt="배경 이미지"
                    sizes="(max-width: 300px),(max-height: 170px)"
                    width={"207px"}
                    height={"164px"}
                  />
                )}
                <img
                  className="frontImg"
                  src={item.frontImage}
                  alt="프론트 이미지"
                  sizes="(max-width: 300px),(max-height: 170px)"
                  width={"226px"}
                  height={"181px"}
                />
              </article>
              <dl className="contentDescWrap">
                <dt className="title">{item.title}</dt>
                <dd className="author">{item.displayAuthor}</dd>
                <dd className="desc">{item.summary}</dd>
              </dl>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default NewWeb;
