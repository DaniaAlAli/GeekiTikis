import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router";
// Components
import VendorItem from "./VendorItem";
import AddButton from "./Buttons/AddButton";

// Stores
import vendorStore from "../stores/vendorStore";
import authStore from "../stores/authStore";

// Styles
import { Title, ListWrapper } from "../styles";
import SearchBar from "./SearchBar";

const VendorList = () => {
  const [query, setQuery] = useState("");

  if (!authStore.user || authStore.user.role !== "admin")
    return <Redirect to="/" />;

  const vendorList = vendorStore.vendors
    .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
    .map((vendor) => <VendorItem vendor={vendor} key={vendor.id} />);
  return (
    <div className="container">
      <Title> Vendors </Title>
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{vendorList}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(VendorList);
