/**
 * 파일명: /webtoon/page.tsx
 * 설명: 웹툰 페이지
 */

import { NewWebtoon } from '@components/webtoon/NewWebtoonBox';
import { AllWebtoonContainer } from '../layout';
import NewWeb from '@components/webtoon/NewWeb';
import AllWeb from '@components/webtoon/AllWeb';
import axios from 'axios';
import { WebtoonListAll } from '@interfaces/WebtoonList';

async function getNewWebtoonList() {
  const res = await fetch('http://localhost:3000/api/newWebtoonList', {
    method: 'GET',
  }).then(result => result.json());

  return res;
}

async function getAllWebtoonList() {
  try {
    const res = (await axios.get('http://localhost:3000/api/webtoonList'))?.data;
    return res;
  } catch (err) {
    console.log(err);
  }
}

const WebtoonAll = async () => {
  const newWebtoonList = await getNewWebtoonList();
  const allWebtoonList: WebtoonListAll = await getAllWebtoonList();
  // const { data: NaverWebtoonList } = useQuery({
  //   queryKey: ["getNaverWebtoonList"],
  //   queryFn: async () => {
  //     const res = await axios.get("http://localhost:3000/api/webtoon");
  //     return res;
  //   },
  // });

  // const { data: NaverSavedList } = useQuery({
  //   queryKey: ["saveNaverWebtoonList"],
  //   queryFn: async () => {
  //     const res = await axios.post(
  //       "http://localhost:3000/api/webtoon",
  //       NaverWebtoonList,
  //     );
  //     return res.data;
  //   },
  //   enabled: !!NaverWebtoonList,
  // });

  // console.log(NaverWebtoonList, "웹툰 리스트");
  // console.log(NaverSavedList, "저장 웹툰 리스트");

  // const param: getNewWebtoonListParam = {
  //   // 66c1eb29b41a3725ec17b4ee 요일전체
  //   week: "undefined",
  //   tag: "false",
  //   sortByUpdate: "false",
  // };
  // const { data: getNewWebtoonList } = useQuery<NewWebtoonList>({
  //   queryKey: ["getNewNaverWebtoons"],
  //   queryFn: async () => {
  //     const res = await WebtoonApi.getNaverNewWebtoonList(param);
  //     return res.data;
  //   },
  // });

  // console.log(getNewWebtoonList, "new");

  // const { data: NaverSavedNewList } = useQuery({
  //   queryKey: ["saveNewNaverWebtoonList"],
  //   queryFn: async () => {
  //     const res = await axios.post(
  //       "http://localhost:3000/api/newWebtoon",
  //       getNewWebtoonList,
  //     );
  //     return res.data;
  //   },
  //   enabled: !!getNewWebtoonList,
  // });

  // console.log(NaverSavedNewList, "save");

  // const { data: getSavedNewWebtoonList, isFetching: newWebtoonListFetcing } =
  //   useQuery<NewWebtoonList>({
  //     queryKey: ["getSavedDbNewWebtoons"],
  //     queryFn: getDbNewWebtoonList,
  //     staleTime: 0,
  //   });

  // const { data: getSavedWebtoonList, isFetching: webtoonListFetcing } =
  //   useQuery<WebtoonListAll>({
  //     queryKey: ["getSavedNaverWebtoons"],
  //     queryFn: getNaverWebtoonList,
  //   });

  return (
    <AllWebtoonContainer>
      <NewWeb newWebtoonList={newWebtoonList} />
      <AllWeb allWebtoonList={allWebtoonList} />
    </AllWebtoonContainer>
  );
};

export default WebtoonAll;
