import './Card.css';

function Card(props) {
  const { children, className} = props;
  const cardClassName = 'card ' + className;

  return <div className={cardClassName}>{children}</div>
}

export default Card;