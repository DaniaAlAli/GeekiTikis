import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//Component
import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";

//Style
import { DetailWrapper, MugWrapper, ListWrapper } from "../styles";

//Store
import mugStore from "../stores/MugStore";

const MugDetail = () => {
  const { mugSlug } = useParams();

  const mugs = mugStore.mugs.find((mug) => mug.slug === mugSlug);

  if (!mugs) return <Redirect to="/mugs" />;
  return (
    <MugWrapper>
      <ListWrapper>
        <DetailWrapper>
          <ListWrapper>
            <img alt={mugs.name} src={mugs.image} />
          </ListWrapper>
          <ListWrapper>
            <p className="mug-type">{mugs.name}</p>
          </ListWrapper>
          <p className="mug-text">{mugs.fix}</p>
          <ListWrapper>
            <p className="mug-descrip">{mugs.description}</p>
          </ListWrapper>
          <p className="mug-barcode">{mugs.barcode}</p>
          <UpdateButton mug={mugs} />
          <DeleteButton mugId={mugs.id} />
        </DetailWrapper>
      </ListWrapper>
    </MugWrapper>
  );
};

export default observer(MugDetail);
