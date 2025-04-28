import { makeResource } from "../utils/resource";
import PersonDetailsQuery from "./__generated__/PersonDetailsQuery.graphql";
import { createEntryPoint } from "../relay/create-entrypoint";

const personDetailsEntryPoint = createEntryPoint({
  root: makeResource("PersonDetails", () =>
    import("./PersonDetails").then((module) => {
      return module.default;
    })
  ),
  getPreloadProps({ id }: { id: string }) {
    return {
      queries: {
        personDetailsQuery: {
          parameters: PersonDetailsQuery,
          variables: {
            id,
          },
        },
      },
    } as const;
  },
});

export default personDetailsEntryPoint;
