import React from "react";
import { EntryPointComponent, graphql, usePreloadedQuery } from "react-relay";
import type { PersonDetailsQuery } from "./__generated__/PersonDetailsQuery.graphql";
import { ReactPortal } from "./ReactPortal";

const PersonDetails: EntryPointComponent<
  {
    personDetailsQuery: PersonDetailsQuery;
  },
  Record<string, never>,
  Record<string, never>,
  Record<string, never>
> = (props) => {
  const data = usePreloadedQuery<PersonDetailsQuery>(
    graphql`
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
    `,
    props.queries.personDetailsQuery
  );

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
};

export default PersonDetails;
