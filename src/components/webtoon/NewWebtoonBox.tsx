import NewList from "./new/NewList";
import NewTitle from "./new/NewTitle";

const NewWebtoonBox = ({ children }) => {
  return <div className="newWebtoonWrap">{children}</div>;
};

export default NewWebtoonBox;

export const NewWebtoon = Object.assign(NewWebtoonBox, {
  Title: NewTitle,
  List: NewList,
});
