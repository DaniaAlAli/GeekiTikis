import React from "react";
import { Link } from "react-router-dom";

//Style
import { MugWrapper } from "../styles";

const VendorItem = ({ vendor }) => {
  return (
    <div>
      <MugWrapper>
        <Link to={`/vendors/${vendor.slug}`}>
          <img src={vendor.image} alt={vendor.name} />
        </Link>{" "}
      </MugWrapper>
    </div>
  );
};

export default VendorItem;
