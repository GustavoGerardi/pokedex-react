import { WrapperHeader } from "./header.styles";

interface HeaderProps {
  name?: string;
}

export const Header = ({ name }: HeaderProps) => {
  return (
    <WrapperHeader>
      <span> {name} </span>
    </WrapperHeader>
  );
};
