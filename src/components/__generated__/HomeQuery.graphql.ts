/**
 * @generated SignedSource<<b4640174398cdba75499bc8a09472594>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeQuery$variables = Record<PropertyKey, never>;
export type HomeQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"FilmsFragment" | "PeopleFragment">;
};
export type HomeQuery = {
  response: HomeQuery$data;
  variables: HomeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Person",
    "kind": "LinkedField",
    "name": "node",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "FilmsFragment"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "PeopleFragment"
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeQuery",
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
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "releaseDate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FilmCharactersConnection",
                    "kind": "LinkedField",
                    "name": "characterConnection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "FilmCharactersEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": (v1/*: any*/),
                        "storageKey": null
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
        "storageKey": null
      },
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
            "selections": (v1/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fd1203e3da33de3d8ae1c6d800587db0",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  ...FilmsFragment\n  ...PeopleFragment\n}\n\nfragment FilmFragment on Film {\n  title\n  releaseDate\n  characterConnection {\n    edges {\n      node {\n        id\n        ...PersonFragment\n      }\n    }\n  }\n}\n\nfragment FilmsFragment on Root {\n  allFilms {\n    edges {\n      node {\n        id\n        ...FilmFragment\n      }\n    }\n  }\n}\n\nfragment PeopleFragment on Root {\n  allPeople {\n    edges {\n      node {\n        id\n        ...PersonFragment\n      }\n    }\n  }\n}\n\nfragment PersonFragment on Person {\n  name\n  id\n}\n"
  }
};
})();

(node as any).hash = "1f402ef560af1b80516606127c89e64d";

export default node;
