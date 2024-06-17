export interface ICardData {
  id: number;
  image: string;
  name: string;
}

export interface ICardGridProps {
  cards: Array<ICardData>;
}
