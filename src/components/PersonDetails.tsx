import React from "react";
import {
  graphql,
  useFragment,
  useLazyLoadQuery,
  usePreloadedQuery,
} from "react-relay";
import type { PersonDetailsQuery as Query } from "./__generated__/PersonDetailsQuery.graphql";
import { ReactPortal } from "./ReactPortal";
import { PersonDetailsQuery } from "./Person";

export function PersonDetails(props) {
  const data = usePreloadedQuery<Query>(PersonDetailsQuery, props.queryRef);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ReactPortal wrapperId="modal-wrapper">
      <div key={data.person?.id} className="modal">
        <div className="modal-content box">
          <table className="table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{data.person?.name}</td>
              </tr>
              <tr>
                <td>Eye Color</td>
                <td>{data.person?.eyeColor}</td>
              </tr>
              <tr>
                <td>Hair Color</td>
                <td>{data.person?.hairColor}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{data.person?.height}</td>
              </tr>
              <tr>
                <td>Mass</td>
                <td>{data.person?.mass}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ReactPortal>
  );
}
