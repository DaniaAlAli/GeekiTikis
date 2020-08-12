import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router";

//Components
import MugItem from "./MugItem";
import SearchBar from "./SearchBar";

//Style
import { ListWrapper } from "../styles";
import AddButton from "./Buttons/AddButton";

// Stores
import authStore from "../stores/authStore";

const MugsCollection = ({ mugs = [] }) => {
  const [query, setQuery] = useState("");

  if (!authStore.user || authStore.user.role !== "admin")
    return <Redirect to="/" />;
  const mugsCollection = mugs
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
