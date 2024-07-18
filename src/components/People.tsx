import React from "react";
import { graphql, useFragment } from "react-relay";
import type { PeopleFragment$key as PeopleFragment } from "./__generated__/PeopleFragment.graphql";
import { Person } from "./Person";

export function People(props) {
  const data = useFragment<PeopleFragment>(
    graphql`
      fragment PeopleFragment on Root {
        allPeople {
          edges {
            node {
              id
              ...PersonFragment
            }
          }
        }
      }
    `,
    props.fragmentRef
  );

  if (!data || !data.allPeople) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-6">
      <h1 className="title">People</h1>
      <ul className="grid">
        {data.allPeople.edges?.map((edge) => {
          return (
            <li key={edge?.node?.id} className="cell">
              <Person fragmentRef={edge?.node} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
