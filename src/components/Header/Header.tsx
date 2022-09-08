import { FC } from "react";
import { Section, Wraper, Input, Logo, Label } from "./Header.styled";
import { Container } from "components/Container";

interface IHeaderProps {
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
  onSelectChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: string;
}
const Header: FC<IHeaderProps> = ({
  onSearchChange,
  onSelectChange,
  value,
}) => {
  return (
    <Section as="header">
      <Container>
        <Wraper>
          <Logo>Users Posts</Logo>
          <Label>
            <span>Sort Users</span>
            <select name="sort" onChange={onSelectChange}>
              <option value="default">Default</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </Label>
          <Input
            type="text"
            name="search"
            value={value}
            onChange={onSearchChange}
            placeholder="Search"
          />
        </Wraper>
      </Container>
    </Section>
  );
};

export default Header;
