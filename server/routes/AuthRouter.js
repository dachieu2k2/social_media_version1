const express = require("express");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .select("-password")
      .select("-email");
    res.status(200).json({ success: true, info: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      res.json({ success: false, message: "please fill in the fields!" });
    }

    const foundUser = await User.findOne({ username });
    if (foundUser) {
      res.status(400).json({ success: false, message: "choose another name" });
    }

    // const validateEmail = (email) => {
    //   return String(email)
    //     .toLowerCase()
    //     .match(
    //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //     );
    // };
    // if (!validateEmail(email)) {
    //   res.json({ success: false, message: "this is not email" });
    // }
    // const FoundEmail = await User.findOne({ email });
    // if (FoundEmail) {
    //   res.json({
    //     success: false,
    //     message: "Please choose another email",
    //   });
    // }
    // if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
    //   res.json({
    //     success: false,
    //     message:
    //       "Password should contains at least 8 from the mentioned characters, one upper case, one lower case, one digit",
    //   });
    // }
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      username,
      password: hashPassword,
      email,
      avatar:
        "https://hinhnen123.com/wp-content/uploads/2021/06/anh-avatar-cute-dep-nhat-5.jpg",
    });
    await newUser.save();
    const accessToken = await jwt.sign(
      { id: newUser._id },
      process.env.SECRET_TOKEN
    );
    res
      .status(200)
      .json({ success: true, accessToken, message: "Register success!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "server error!" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.json({ success: false, message: "please fill in the fields!" });
    }
    const foundUser = await User.findOne({ username });
    if (!foundUser) {
      res
        .status(400)
        .json({ success: false, message: "username or password is not exact" });
    }

    const verifyPassword = bcrypt.compareSync(password, foundUser.password);
    if (!verifyPassword) {
      res
        .status(400)
        .json({ success: false, message: "username or password is not exact" });
    }
    // ALl good
    const accessToken = await jwt.sign(
      { id: foundUser._id },
      process.env.SECRET_TOKEN
    );
    res
      .status(200)
      .json({ success: true, accessToken, message: "Login success!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "server error!" });
  }
});

module.exports = router;
