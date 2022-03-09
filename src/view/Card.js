import "./Card.css";

export default function Card({ card }) {
  const className = `card card__${card.suit}`;
  return (
    <div className={className}>
      <div>{`${card.num} ${card.suit}`}</div>
    </div>
  );
}
