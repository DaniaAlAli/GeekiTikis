import React, { useState } from "react";

//Components
import MugItem from "./MugItem";

//Data
import mugs from "../mugs";

//Style
import { ListWrapper } from "../styles";

const MugsCollection = () => {
  const [mugsD, setMugs] = useState(mugs);

  const deleteCollection = (mugID) => {
    const updateMugs = mugsD.filter((mugs) => mugs.id !== mugID);
    setMugs(updateMugs);
  };

  const mugsCollection = mugsD.map((mugs) => (
    <MugItem mugs={mugs} deleteCollection={deleteCollection} key={mugs.id} />
  ));

  return <ListWrapper>{mugsCollection}</ListWrapper>;
};

export default MugsCollection;
