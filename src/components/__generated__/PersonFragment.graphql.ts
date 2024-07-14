/**
 * @generated SignedSource<<9c8d590f8a44dbd6a095d28175ac0693>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PersonFragment$data = {
  readonly id: string;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "PersonFragment";
};
export type PersonFragment$key = {
  readonly " $data"?: PersonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PersonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PersonFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};

(node as any).hash = "9b6cce39d0efb1eb2014a9fc6908a617";

export default node;
