import React from "react";

//Style
import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return <SearchBarStyled onChange={(event) => setQuery(event.target.value)} />;
};
export default SearchBar;
