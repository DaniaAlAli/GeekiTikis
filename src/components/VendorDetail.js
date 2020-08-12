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
import mugStore from "../stores/MugStore";

const VendorDetail = () => {
  const { vendorSlug } = useParams();

  const vendor = vendorStore.vendors.find(
    (_vendor) => _vendor.slug === vendorSlug
  );

  if (!vendor) return <Redirect to="/vendors" />;

  const mugs = vendor.mugs.map((mug) =>
    mugStore.getMugById(mug.id).filter((mug) => mug)
  );

  return (
    <>
      <div className="row">
        <div className="container">
          <div className="col-12">
            <DetailWrapper>
              <h4>{vendor.name}</h4>
              <img src={vendor.image} alt={vendor.name} />
              <UpdateButton vendor={vendor} />
              <DeleteButton vendorId={vendor.id} />
            </DetailWrapper>
          </div>
          <div className="col-12">
            <MugList mugs={mugs} />
            <AddButton vendor={vendor} />
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(VendorDetail);
