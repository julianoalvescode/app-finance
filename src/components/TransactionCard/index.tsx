import React from "react";

import * as S from "./styles";
import * as I from "./types";

export const TransactionCard = ({ data }: I.Props) => {
  return (
    <>
      <S.Container>
        <S.Title>{data.title}</S.Title>
        <S.Amount type={data.type}>
          {data.type === "negative" && "- "}
          {data.amount}
        </S.Amount>
        <S.Footer>
          <S.Category>
            <S.Icon name={data.category.icon} />
            <S.CategoryName>{data.category.name}</S.CategoryName>
          </S.Category>
          <S.Date>{data.date}</S.Date>
        </S.Footer>
      </S.Container>
    </>
  );
};
