import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

// Components
import AddButton from "./Buttons/AddButton";
import UpdateButton from "./Buttons/UpdateButton";

//Style
import { DetailWrapper, DeleteButtonStyled } from "../styles";

// Store
import vendorStore from "../stores/vendorStore";
import MugList from "./MugList";
import DeleteButton from "./Buttons/DeleteButton";

const VendorDetail = ({ mugs }) => {
  const { vendorSlug } = useParams();

  const vendor = vendorStore.vendors.find(
    (_vendor) => _vendor.slug === vendorSlug
  );

  if (!vendor) return <Redirect to="/vendors" />;
  return (
    <>
      <DetailWrapper>
        <h4>{vendor.name}</h4>
        <img src={vendor.image} alt={vendor.name} />
        <UpdateButton vendor={vendor} />
      </DetailWrapper>
      <MugList mugs={vendor.mugs} />
      <AddButton vendorId={vendor.id} />
      <DeleteButton vendorId={vendor.id} />
    </>
  );
};

export default observer(VendorDetail);
