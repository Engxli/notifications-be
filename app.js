const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./database");
const userRouter = require("./api/users/routes");
const notificationRouter = require("./api/notifications/routes");
require("dotenv").config();

const app = express();

// before middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/users", userRouter);
app.use("/notifications", notificationRouter);
// after middlewares
connectDB();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("App is running on port: ", PORT);
});
