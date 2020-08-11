import React from "react";
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

// Components
import MugList from "./MugList";
import MugDetail from "./MugDetail";
import Home from "./Home";
import VendorList from "./VendorList";
import VendorDetail from "./VendorDetail";

// Store
import mugStore from "../stores/MugStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/vendors/:vendorSlug">
        <VendorDetail />
      </Route>
      <Route path="/vendors">
        <VendorList />
      </Route>
      <Route path="/mugs/:mugSlug">
        <MugDetail />
      </Route>
      <Route path="/mugs">
        <MugList mugs={mugStore.mugs} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
