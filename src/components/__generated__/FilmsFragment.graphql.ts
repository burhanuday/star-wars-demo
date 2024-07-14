/**
 * @generated SignedSource<<7db6e16bb59c2d194983cd21833cf8be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmsFragment$data = {
  readonly allFilms: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"FilmFragment">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "FilmsFragment";
};
export type FilmsFragment$key = {
  readonly " $data"?: FilmsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FilmsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FilmsConnection",
      "kind": "LinkedField",
      "name": "allFilms",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FilmsEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Film",
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
                  "name": "FilmFragment"
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

(node as any).hash = "2e11f8ed56eb734d6ce01adba7a3234d";

export default node;
