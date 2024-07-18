import React from "react";
import { graphql, useFragment } from "react-relay";
import type { FilmsFragment$key as FilmsFragment } from "./__generated__/FilmsFragment.graphql";
import { Film } from "./Film";

export function Films(props) {
  const data = useFragment<FilmsFragment>(
    graphql`
      fragment FilmsFragment on Root {
        allFilms {
          edges {
            node {
              id
              ...FilmFragment
            }
          }
        }
      }
    `,
    props.fragmentRef
  );

  if (!data || !data.allFilms) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="title">Films</h1>
      <div className="grid">
        {data.allFilms.edges?.map((edge) => {
          return (
            <div className="cell" key={edge?.node?.id}>
              <Film fragmentRef={edge?.node} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
