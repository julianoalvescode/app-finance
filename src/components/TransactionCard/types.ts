export type TransactionCardProps = {
  type: "positive" | "negative";
  title: string;
  amount: string;
  date: string | Date;
  category: Category;
};

export type Props = {
  data: TransactionCardProps;
};

type Category = {
  name: string;
  icon: string;
};

export interface DataListProps extends TransactionCardProps {
  id: number;
}
