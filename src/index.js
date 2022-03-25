const express = require("express");
require("dotenv").config();
const connectDB = require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); // if I am not using it I will not have req.body

app.use(userRouter);
app.use(taskRouter);

const main = async () => {
  try {
    await connectDB.connect(process.env.MONGO_URI);
    app.listen(port, async () => {
      console.log("http://localhost:" + port);
    });
  } catch (error) {}
};

main();
