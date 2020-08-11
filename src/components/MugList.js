import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import MugItem from "./MugItem";
import SearchBar from "./SearchBar";

//Style
import { ListWrapper } from "../styles";

const MugsCollection = ({ mugs }) => {
  const [query, setQuery] = useState("");

  const mugsCollection = mugs
    .filter((mug) => mug.name.toLowerCase().includes(query.toLowerCase()))
    .map((mug) => <MugItem mug={mug} key={mug.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{mugsCollection}</ListWrapper>
    </div>
  );
};

export default observer(MugsCollection);
