import './Card.css';

function Card({imageURL, title, description}) {
    const imageWidth = 80;
    const imageHeight = 80;
  return (
    <div className="Card">
      <img src={imageURL} alt="Skill" width={imageWidth} height={imageHeight} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
