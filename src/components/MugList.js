import React from "react";

//Components
import MugItem from "./MugItem";

//Data
import mugs from "../mugs";

//Style
import styles from "../styles";

const MugsCollection = () => {
  const mugsCollection = mugs.map((mug) => <MugItem mug={mug} key={mug.id} />);

  return <div style={styles.centering}>{mugsCollection}</div>;
};

export default MugsCollection;
