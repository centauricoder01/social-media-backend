/* ALL IMPORT FILES */
const express = require("express");
const bodyParser = require("body-parser");
const { connect } = require("./Server");
const { AuthRouter } = require("./Routes/Auth.Route");
const { UserRoute } = require("./Routes/User.Route");
const { PostRoutes } = require("./Routes/Post.Routes");
require("dotenv").config();

/* ALL MIDDLEWARE FILES */
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/* ALL ROUTES */
app.use("/auth", AuthRouter);
app.use("/user", UserRoute);
app.use("/post", PostRoutes);

/* CONNECTION PART */
app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log(`the port is running at ${process.env.PORT}`);
  } catch (error) {
    console.log(`The Error is ${error}`);
  }
});
