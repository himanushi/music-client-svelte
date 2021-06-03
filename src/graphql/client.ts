import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from "@apollo/client/core";

const httpLink = new HttpLink({
  credentials: "include",
  uri: import.meta.env.SNOWPACK_PUBLIC_GRAPHQL_URI
});

const headersLink = new ApolloLink((operation, forward) => forward(operation));

const link = ApolloLink.from([
  headersLink,
  httpLink
]);

const offsetLimitPagination = {
  keyArgs: [
    "conditions",
    [
      "name",
      "status",
      "favorite",
      "isMine",
      "artists",
      ["id"],
      "albums",
      ["id"],
      "tracks",
      ["id"],
      "usernames",
      []
    ],
    "sort",
    [
      "order",
      "type"
    ]
  ],

  merge (existing = [], incoming = []) {

    return [
      ...existing,
      ...incoming
    ];

  }
};

const cache = new InMemoryCache({ typePolicies: { Query: { fields: {
  albums: offsetLimitPagination,
  artists: offsetLimitPagination,
  playlists: offsetLimitPagination,
  tracks: offsetLimitPagination
} } } });

export default new ApolloClient({
  cache,
  link
});
