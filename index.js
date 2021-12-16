const { ApolloServer } = require("apollo-server-fastify");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const fastify = require("fastify");
const TypeDefs = require("./graphql/typeDefs");
const Resolvers = require("./graphql/resolvers/index");
require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

function fastifyAppClosePlugin(app) {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close();
        },
      };
    },
  };
}

async function startApolloServer(typeDefs, resolvers) {
  const app = fastify();
  const server = new ApolloServer({
    playground: true,
    typeDefs,
    context: ({ req }) => ({ req }),
    resolvers,
    plugins: [
      fastifyAppClosePlugin(app),
      ApolloServerPluginDrainHttpServer({ httpServer: app.server }),
    ],
  });
  mongoose
    .connect(MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      console.log("Connected to mongodb sucessfully");
      await server.start();
      app.register(server.createHandler());
      await app.listen(PORT);
      console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

startApolloServer(TypeDefs, Resolvers);
