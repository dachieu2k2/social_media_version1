require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const AuthRouter = require("./routes/AuthRouter.js");
const PostRouter = require("./routes/PostRouter");

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
app.use("/static", express.static("./uploads"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/users", AuthRouter);
app.use("/api/post", PostRouter);

const PORT = 4000 || process.env.PORT;

const server = app.listen(PORT, console.log(`App start on port ${PORT}`));

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket.io", socket.id);
  socket.on("global_post", (data) => {
    console.log("global_post");
    socket.emit("receive_global_post", data);
  });
  socket.on("disconnect", () => {
    console.log("socket disconnect");
  });
});
