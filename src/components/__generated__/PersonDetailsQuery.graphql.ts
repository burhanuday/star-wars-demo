/**
 * @generated SignedSource<<e688961cf64211cb38de46bb71039374>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PersonDetailsQuery$variables = {
  id: string;
};
export type PersonDetailsQuery$data = {
  readonly person: {
    readonly eyeColor: string | null | undefined;
    readonly hairColor: string | null | undefined;
    readonly height: number | null | undefined;
    readonly id: string;
    readonly mass: number | null | undefined;
    readonly name: string | null | undefined;
  } | null | undefined;
};
export type PersonDetailsQuery = {
  response: PersonDetailsQuery$data;
  variables: PersonDetailsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Person",
    "kind": "LinkedField",
    "name": "person",
    "plural": false,
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "eyeColor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hairColor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "height",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "mass",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PersonDetailsQuery",
    "selections": (v1/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PersonDetailsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4f2c2cfd7232fb39f91b6e382bc53fac",
    "id": null,
    "metadata": {},
    "name": "PersonDetailsQuery",
    "operationKind": "query",
    "text": "query PersonDetailsQuery(\n  $id: ID!\n) {\n  person(id: $id) {\n    name\n    id\n    eyeColor\n    hairColor\n    height\n    mass\n  }\n}\n"
  }
};
})();

(node as any).hash = "33a175d135f3c4f1eddae56b5be3a287";

export default node;
