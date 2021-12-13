const { gql } = require("apollo-server-core");

module.exports = gql`
  scalar Date
  type User {
    id: ID!
    username: String!
    phone: String!
    about: string!
  }
`;
