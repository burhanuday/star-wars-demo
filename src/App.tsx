import React from "react";
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
