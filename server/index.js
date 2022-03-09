require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const AuthRouter = require("./routes/AuthRouter.js");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@cluster0.ifbwf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    console.log("connected DB");
  } catch (error) {
    console.log(error.message);
    process.exit(-1);
  }
};
connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/users", AuthRouter);

const PORT = 4000 || process.env.PORT;

app.listen(PORT, console.log(`App start on port ${PORT}`));
