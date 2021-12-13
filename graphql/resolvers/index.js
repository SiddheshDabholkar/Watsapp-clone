const ChatResolvers = require("../resolvers/chat");
const GroupResolvers = require("../resolvers/group");
const UserResolvers = require("../resolvers/user");

module.exports = {
  Query: {
    ...ChatResolvers.Query,
    ...GroupResolvers.Query,
    ...UserResolvers.Query,
  },
  Mutation: {
    ...ChatResolvers.Mutation,
    ...GroupResolvers.Mutation,
    ...UserResolvers.Mutation,
  },
};
