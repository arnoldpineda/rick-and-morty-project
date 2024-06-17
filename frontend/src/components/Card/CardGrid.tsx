import { FC } from "react";
import Card from "./Card";
import { ICardGridProps } from "../../interfaces/cards";

const CardGrid: FC<ICardGridProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
      {cards.map((card, index) => (
        <Card key={index} id={card.id} name={card.name} image={card.image} />
      ))}
    </div>
  );
};

export default CardGrid;
