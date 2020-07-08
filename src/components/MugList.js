import React, { useState } from "react";
import { Rout } from "react-router-dom";

//Components
import MugItem from "./MugItem";
import SearchBar from "./SearchBar";

//Style
import { ListWrapper } from "../styles";

const MugsCollection = ({ mug, deleteCollection }) => {
  const [query, setQuery] = useState("");

  const mugsCollection = mug
    .filter((mug) => mug.name.toLowerCase().includes(query.toLowerCase()))
    .map((mug) => (
      <MugItem mug={mug} deleteCollection={deleteCollection} key={mug.id} />
    ));

  return (
    <div class="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{mugsCollection}</ListWrapper>
    </div>
  );
};

export default MugsCollection;
