/* ALL IMPORT FILES */
const express = require("express");
const bodyParser = require("body-parser");
const { connect } = require("./Server");
const { AuthRouter } = require("./Routes/Auth.Route");
const { UserRoute } = require("./Routes/User.Route");
const { PostRoutes } = require("./Routes/Post.Routes");
require("dotenv").config();
const cors = require("cors");
const { ChatRoute } = require("./Routes/Chat.Routes");
const { MessageRouter } = require("./Routes/Message.Route");

/* ALL MIDDLEWARE FILES */
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/* ALL ROUTES */
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Diverse Backend",
    Routes: "Enter Specfic URl to get The Data",
  });
});
app.use("/auth", AuthRouter);
app.use("/user", UserRoute);
app.use("/post", PostRoutes);
app.use("/chat", ChatRoute);
app.use("/message", MessageRouter);

/* CONNECTION PART */
app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log(`the port is running at ${process.env.PORT}`);
  } catch (error) {
    console.log(`The Error is ${error}`);
  }
});
