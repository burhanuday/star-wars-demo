import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import type { HomeQuery } from "./__generated__/HomeQuery.graphql";
import { Films } from "./Films";
import { People } from "./People";

export function Home() {
  const data = useLazyLoadQuery<HomeQuery>(
    graphql`
      query HomeQuery {
        ...FilmsFragment
        ...PeopleFragment
      }
    `,
    {}
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="p-4">
      <Films fragmentRef={data} />
      <People fragmentRef={data} />
    </main>
  );
}
