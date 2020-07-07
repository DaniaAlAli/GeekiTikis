import React from "react";

//Components
import MugItem from "./MugItem";

//Style
import { ListWrapper } from "../styles";

const MugsCollection = (props) => {
  const mugsCollection = props.mug.map((mug) => (
    <MugItem
      mug={mug}
      deleteCollection={props.deleteCollection}
      backToList={props.backToList}
      selectMug={props.selectMug}
      key={mug.id}
    />
  ));

  return <ListWrapper>{mugsCollection}</ListWrapper>;
};

export default MugsCollection;
