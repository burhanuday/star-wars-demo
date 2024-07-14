import React, { lazy, Suspense, useState } from "react";
import {
  graphql,
  useFragment,
  useLazyLoadQuery,
  useQueryLoader,
} from "react-relay";
import type { PersonFragment$key as PersonFragment } from "./__generated__/PersonFragment.graphql";
import type { PersonDetailsQuery as Query } from "./__generated__/PersonDetailsQuery.graphql";

export const PersonDetailsQuery = graphql`
  query PersonDetailsQuery($id: ID!) {
    person(id: $id) {
      name
      id
      eyeColor
      hairColor
      height
      mass
    }
  }
`;

const AsyncPersonDetails = lazy(() =>
  import("./PersonDetails").then((module) => ({
    default: module.PersonDetails,
  }))
);

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

  const [queryRef, loadQuery] = useQueryLoader<Query>(PersonDetailsQuery);

  const handlePersonClicked = () => {
    loadQuery({ id: data.id });
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
      {showModal && (
        <Suspense fallback="loading...">
          <AsyncPersonDetails queryRef={queryRef} />
        </Suspense>
      )}
    </>
  );
}
