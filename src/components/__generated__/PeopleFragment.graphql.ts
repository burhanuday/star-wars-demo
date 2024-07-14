/**
 * @generated SignedSource<<fc9b19e524c37a3d0a9223fe8dcb9337>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PeopleFragment$data = {
  readonly allPeople: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"PersonFragment">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "PeopleFragment";
};
export type PeopleFragment$key = {
  readonly " $data"?: PeopleFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PeopleFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PeopleFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PeopleConnection",
      "kind": "LinkedField",
      "name": "allPeople",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PeopleEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Person",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "PersonFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Root",
  "abstractKey": null
};

(node as any).hash = "f5261ce323062f3092d3dc9f2eb7151b";

export default node;
