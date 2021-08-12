import React from "react";

import * as S from "./styles";
import * as I from "./types";

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export const HightLightCard = ({
  lastTransaction,
  amount,
  title,
  type,
}: I.Props) => {
  return (
    <>
      <S.Container type={type}>
        <S.Header>
          <S.Title type={type}>{title}</S.Title>
          <S.Icon name={icon[type]} type={type} />
        </S.Header>
        <S.Footer>
          <S.Amount type={type}>{amount}</S.Amount>
          <S.LastTransaction type={type}> {lastTransaction}</S.LastTransaction>
        </S.Footer>
      </S.Container>
    </>
  );
};
