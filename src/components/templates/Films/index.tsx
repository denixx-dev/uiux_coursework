import { useFilmList } from "@/lib/hooks/useFilmList";
import { useState, useEffect } from "react";
import Pagination from "../../common/Pagination/Pagination";
import Film from "./Film/Film";
import Loader from "@/components/common/Loader";
import * as Style from "./index.styled";

const Films = () => {
  // Начинаем с первой страницы фильмов
  const [page, setPage] = useState(1);
  // Кол-во фильмов на странице
  const pageSize = 5;
  const { filmList, isLoading } = useFilmList(String(page), String(pageSize));
  const [loading, setLoading] = useState(false);

  let prevVal = page;

  const filmsList = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

  if (isLoading) return <div style = {{position: 'absolute', left: '50%', top: '50%'}}><Loader /></div> 

  const handlePageChange = async (page: number) => {
    setLoading(true);
    setTimeout(() => {
      setPage(page);
      setLoading(false);
    }, 500);
    // await setPage(page);
    // setLoading(false);
  };

  // Пытался сделать экран при загрузке списка фильмов
  // useEffect(() => {
  //   if (!isLoading) {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1000);
  //   }
  // }, [isLoading]);

  // if (isLoading) {
  //   return;
  // }

  return filmList ? (
    <Style.Films>
      <Style.Content>
        <Style.Title>Films</Style.Title>
          <Style.List>{filmsList}</Style.List>
           <Pagination
            totalUsersCount={filmList?.data?.movie_count}
            currentPage={page}
            pageSize={pageSize}
            onPageChange={(page) => setPage(page)}
          />
      </Style.Content>
    </Style.Films>
  ) : null;
  
};

export default Films;
