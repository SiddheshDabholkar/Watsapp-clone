import gql from "graphql-tag";

const typeDefs = gql`
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
`;

export default typeDefs;
