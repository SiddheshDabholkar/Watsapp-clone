import gql from "graphql-tag";

const Schmea = gql`
  scalar Date
  type User {
    id: ID!
    username: String!
    phone: String!
    about: string!
  }
`;
