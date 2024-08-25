import { NewWebtoonListContents } from "@interfaces/WebtoonList";
import { Fragment } from "react";

interface IProps {
  itemList: NewWebtoonListContents;
}

const NewList = ({ itemList }: IProps) => {
  return (
    <ul className="newWebtoonList">
      {itemList?.map((item: NewWebtoonListContents, index) => (
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
  );
};

export default NewList;
