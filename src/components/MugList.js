import React from "react";

//Components
import MugItem from "./MugItem";

//Data
import mugs from "../mugs";

//Style
import { ListWrapper } from "../styles";

const MugsCollection = () => {
  const mugsCollection = mugs.map((mug) => <MugItem mug={mug} key={mug.id} />);

  return <ListWrapper>{mugsCollection}</ListWrapper>;
};

export default MugsCollection;
