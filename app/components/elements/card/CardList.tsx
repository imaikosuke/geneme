import React from 'react';
import Card from './CardItem';

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface CardListProps {
  cards: CardData[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {cards.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default CardList;
