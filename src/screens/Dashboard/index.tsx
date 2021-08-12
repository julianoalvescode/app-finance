import React from "react";

import { StatusBar, FlatList } from "react-native";
import { DataListProps } from "../../components/TransactionCard/types";

import { HightLightCard } from "./../../components/HightLightCard";
import { TransactionCard } from "./../../components/TransactionCard";

import * as S from "./styles";

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      title: "Desenvolvimento de Sites",
      amount: "R$ 13.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "13/04/200",
      type: "positive",
    },
    {
      id: "2",
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: { name: "Vendas", icon: "coffee" },
      date: "13/04/200",
      type: "negative",
    },
    {
      id: "3",
      type: "negative",
      title: "Alguem do apartamento",
      amount: "R$ 59,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "13/04/200",
    },
  ];

  return (
    <>
      <S.Container>
        <StatusBar backgroundColor="#5636D3" />
        <S.Header>
          <S.UserWrapper>
            <S.UserInfo>
              <S.Photo
                source={{
                  uri: "https://avatars0.githubusercontent.com/u/43914533?v=4",
                }}
              />
              <S.User>
                <S.UserGreeting>Olá,</S.UserGreeting>
                <S.UserName>Juliano Alves</S.UserName>
              </S.User>
            </S.UserInfo>
            <S.Icon name="power" />
          </S.UserWrapper>
        </S.Header>
        <S.HighlightCards>
          <HightLightCard
            title="Entradas"
            amount="R$ 17.400,00"
            lastTransaction="Última entrada dia 13 de abril."
            type="up"
          />
          <HightLightCard
            title="Saídas"
            amount="R$ 17.400,00"
            lastTransaction="Última entrada dia 13 de abril."
            type="down"
          />
          <HightLightCard
            title="Saídas"
            amount="R$ 17.400,00"
            lastTransaction="Última entrada dia 13 de abril."
            type="total"
          />
        </S.HighlightCards>
        <S.Transactions>
          <S.Title>Listagem</S.Title>
          <S.TransactionsList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <>
                <TransactionCard data={item} />
              </>
            )}
          />
        </S.Transactions>
      </S.Container>
    </>
  );
}
