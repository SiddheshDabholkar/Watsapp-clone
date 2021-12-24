require("dotenv").config();
const express = require("express");
const socket = require("socket.io");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const app = express();

const Chat = require("./routes/Chat");
const Group = require("./routes/Group");
const User = require("./routes/User");

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("error connecting mongodb", err));

app.use(express.json());

app.use("/api/chat", Chat);
app.use("/api/group", Group);
app.use("/api/user", User);

const server = app.listen(port, () =>
  console.log(`app listening on port ${port}!`)
);
const io = socket(server);
io.on("connection", (socket) => {
  console.log("Made socket connection");
});
