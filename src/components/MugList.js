import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import MugItem from "./MugItem";
import AddButton from "./Buttons/AddButton";
import SearchBar from "./SearchBar";

//Style
import { ListWrapper } from "../styles";

//Store
import mugStore from "../stores/MugStore";

const MugsCollection = () => {
  const [query, setQuery] = useState("");

  const mugsCollection = mugStore.mugs
    .filter((mug) => mug.name.toLowerCase().includes(query.toLowerCase()))
    .map((mug) => <MugItem mug={mug} key={mug.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{mugsCollection}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(MugsCollection);
