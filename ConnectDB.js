import fp from "fastify-plugin";
import mongoose from "mongoose";

import Chat from "./model/chat";
import Group from "./model/group";
import User from "./model/user";

const models = { Chat, Group, User };

const ConnectDB = async (fastify, options) => {
  try {
    mongoose.connection.on("connected", () => {
      fastify.log.info({ actor: "MongoDB" }, "connected");
    });
    mongoose.connection.on("disconnected", () => {
      fastify.log.error({ actor: "MongoDB" }, "disconnected");
    });
    const db = await mongoose.connect(options.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    fastify.decorate("db", { models });
  } catch (error) {
    console.error("db connection error", error);
  }
};
export default fp(ConnectDB);
