import { CardContainer, Title } from "./card.styles";

interface CardProps {
  title: string;
  message?: string;
  colorBackground: string;
}

export const Card = ({ title, message, colorBackground }: CardProps) => {
  const validateMessage = () => {
    if (message) {
      return <p>{message}</p>;
    }
  };

  return (
    <CardContainer colorBackground={colorBackground}>
      <Title>{title}</Title>

      {validateMessage()}
    </CardContainer>
  );
};
