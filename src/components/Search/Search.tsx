import * as Styled from "./Seach.styles";
import { SearchProps } from "./Search.types";

const Search = ({ value, label, onChange }: SearchProps) => {
  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <Styled.Search>
      {label && <Styled.Label htmlFor="input-name">{label}</Styled.Label>}
      <Styled.Input
        id="input-name"
        onInput={inputChangeHandler}
        value={value}
      />
    </Styled.Search>
  );
};

export default Search;
