import React from "react";
import { graphql, useFragment } from "react-relay";
import type { FilmFragment$key as FilmFragment } from "./__generated__/FilmFragment.graphql";
import { Person } from "./Person";

export function Film(props) {
  const data = useFragment<FilmFragment>(
    graphql`
      fragment FilmFragment on Film {
        title
        releaseDate
        characterConnection {
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

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>{data.title}</h1>
          <p>{data.releaseDate}</p>
          {data.characterConnection?.edges?.slice(0, 5).map((edge) => {
            return <Person key={edge?.node?.id} fragmentRef={edge?.node} />;
          })}
        </div>
      </div>
    </div>
  );
}
