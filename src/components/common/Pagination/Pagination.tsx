import React, { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import { VscArrowUp, VscArrowDown } from "react-icons/vsc";

import { useWindowSize } from "@/hooks/useWindowSize";
import * as Style from "./index.styled";

type PaginationProps = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (element: number, page: number) => void;
};
const Pagination: React.FC<PaginationProps> = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let portionSize = 5;
  const [paginationStyleFlag, setPaginationStyleFlag] = useState(0);
  const size = useWindowSize();
  const windowWidth = size[0];
  const windowHeight = size[1];
  
  // alert(windowWidth);
  // Меняю кол-во фильмов на экране 
  // по мере его масштабирования в большую или меньшую стороны
  // адаптивная верстка крч на главной странице
  useEffect(() => {
    if (windowWidth < 1920){
      setPaginationStyleFlag(1);
    }
    else {
      setPaginationStyleFlag(0);
    }
  }, [windowWidth, windowHeight]);


  // Кол-во "порций" страниц пагинации
  if (windowWidth >= 1920) {
    portionSize = 10;
  }
  if (windowWidth < 300) {
    portionSize = 2;
  }

  let pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  for (let i = pagesCount; i >= 1; i--){
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;


  let pagesElements = pages
    .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
    .map((element) => {
      if (element === props.currentPage) {
        return (
          <Style.ActiveItem key={`pagination${element}`}>
            {element}
          </Style.ActiveItem>
        );
      } else {
        return (
          // Смена страницы по нажатию на индекс в пагинации
          <Style.Item
            key={`pagination${element}`}
            onClick={() => props.onPageChange(element, props.pageSize)}
          >
            {element}
          </Style.Item>
        );
      }
    });
  
  if (paginationStyleFlag == 1){
    return (
      // Стрелочки для переключения страниц пагинации
      <Style.ScaledPagination>
        <Style.ScaledContent>
          {portionNumber > 1 && (
            <Style.ScaledItem onClick={() => setPortionNumber(portionNumber - 1)}>
              <VscArrowDown />
            </Style.ScaledItem>
          )}
          {pagesElements}
          {portionCount > portionNumber && (
            <Style.ScaledItem onClick={() => setPortionNumber(portionNumber + 1)}>
              <VscArrowUp/>
            </Style.ScaledItem>
          )}
        </Style.ScaledContent>
      </Style.ScaledPagination>
      );
  }
  else{
    return (
      // Стрелочки для переключения страниц пагинации
      <Style.Pagination>
      <Style.Content>
        {portionNumber > 1 && (
          <Style.Item onClick={() => setPortionNumber(portionNumber - 1)}>
            <VscArrowDown />
          </Style.Item>
        )}
        {pagesElements}
        {portionCount > portionNumber && (
          <Style.Item onClick={() => setPortionNumber(portionNumber + 1)}>
            <VscArrowUp/>
          </Style.Item>
        )}
      </Style.Content>
      </Style.Pagination>
    )
  }
};
export default Pagination;
