import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import { AppQuery as AppQuery } from "./__generated__/AppQuery.graphql";
import RelayEnvironment from "./relay/RelayEnvironment";
import { Home } from "./components/Home";

export function App() {
  return (
    <RelayEnvironment>
      <React.Suspense fallback="Loading...">
        <Home />
      </React.Suspense>
    </RelayEnvironment>
  );
}
