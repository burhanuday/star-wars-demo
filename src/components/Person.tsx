import React, { Suspense, useState } from "react";
import {
  EntryPointContainer,
  graphql,
  useEntryPointLoader,
  useFragment,
  useRelayEnvironment,
} from "react-relay";
import type { PersonFragment$key as PersonFragment } from "./__generated__/PersonFragment.graphql";

import personDetailsEntryPoint from "./personDetailsEntrypoint";

export function Person(props) {
  const [showModal, setShowModal] = useState(false);

  const data = useFragment<PersonFragment>(
    graphql`
      fragment PersonFragment on Person {
        name
        id
      }
    `,
    props.fragmentRef
  );

  const environment = useRelayEnvironment();

  const [entrypointReference, loadEntrypoint] = useEntryPointLoader(
    { getEnvironment: () => environment },
    personDetailsEntryPoint
  );

  const handlePersonClicked = () => {
    loadEntrypoint({
      id: data.id,
    });
    setShowModal(true);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        role="button"
        onClick={handlePersonClicked}
        key={data.id}
        className="box"
      >
        <p>{data.name}</p>
      </div>
      {showModal && entrypointReference && (
        <Suspense fallback="loading...">
          <EntryPointContainer
            entryPointReference={entrypointReference}
            props={{}}
          />
        </Suspense>
      )}
    </>
  );
}
