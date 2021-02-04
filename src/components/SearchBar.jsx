import { SearchBarStyled } from "../styles";

export default function SearchBar(props) {
  return (
    <SearchBarStyled
      placeholder="Search for a book name or by its genre"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
}
