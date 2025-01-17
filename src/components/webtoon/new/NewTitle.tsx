"use client";
import Link from "next/link";

interface IProps {
  title: string;
  etc: boolean;
}

const NewTitle = ({ title, etc }) => {
  return (
    <div className="newWebtoonTitle">
      <h2>{title}</h2>
      {etc ? <Link href={"#"}>신작웹툰 더보기 {">"}</Link> : <></>}
    </div>
  );
};

export default NewTitle;
