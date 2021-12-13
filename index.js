import fastify from "fastify";
import mercurius from "mercurius";
import db from "./ConnectDB";

import Resolvers from "./graphql/resolvers";
// import TypeDefs from "./graphql/typeDefs";
import TypeDefs from "./graphql/one.graphql";

const Port = process.env.PORT || 4500;
const uri = process.env.MONGO_URI;

const app = fastify({ logger: true });

app.register(db, { uri });
app.register(mercurius, {
  Resolvers,
  TypeDefs,
  graphiql: "playground",
});

const start = async () => {
  try {
    await app.listen(Port);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
