const { gql } = require("apollo-server-core");

module.exports = gql`
  scalar Date

  type User {
    id: ID!
    name: String!
    phone: String!
    about: String
    profilePic: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Group {
    id: ID!
    groupName: String!
    groupAbout: String
    groupAdmin: [User]
    groupUsers: [User]
    createdAt: Date!
    updatedAt: Date!
  }

  type Chat {
    id: ID!
    user: [User]
    message: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    register(name: String, phone: String): User
  }
`;
