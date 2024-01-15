import styled from "styled-components";

interface CardContainerProps {
  colorBackground: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: 300px;
  height: 300px;
  border-radius: 16px;
  padding: 20px;
  background-color: ${({ colorBackground }) => colorBackground};
  margin: 10px 8px;
`;

export const Title = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 18px;
`;
