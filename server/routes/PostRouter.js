const Post = require("../models/PostModel");
const fs = require("fs");
const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();
const multer = require("multer");
const User = require("../models/UserModel");
const upload = multer({ dest: "./uploads" });

router.post(
  "/",
  upload.fields([
    { name: "post", maxCount: 1 },
    { name: "document", maxCount: 1 },
  ]),
  verifyToken,
  async (req, res) => {
    const fileType = req.files["post"][0].mimetype.split("/")[1];
    const newFileName = req.files["post"][0].filename + "." + fileType;
    fs.renameSync(
      `./uploads/${req.files["post"][0].filename}`,
      `./uploads/${newFileName}`
    );

    try {
      const data = fs.readFileSync(
        `./uploads/${req.files["document"][0].filename}`,
        {
          encoding: "utf8",
          flag: "r",
        }
      );
      //   const data = ${req.files["document"][0]
      console.log(data);
      const json = JSON.parse(data);
      const { title, description } = json;
      const newPost = new Post({
        title,
        description,
        image: "http://localhost:4000" + "/static/" + newFileName,
        user: req.userId,
      });

      await newPost.save();
      await newPost.populate("user", ["username", "avatar", "email", "_id"]);
      //   const userInfo = await User.findById(req.userId).select("-password");

      res
        .status(200)
        .json({ success: true, message: "create post success!", newPost });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ success: false, message: "Server error!" });
    }
  }
);

router.get("/", verifyToken, async (req, res) => {
  try {
    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .limit(20)
      .populate("user", ["username", "avatar", "email", "_id"]);

    res
      .status(200)
      .json({ success: true, message: "get post success!", posts });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Server error!" });
  }
});

// router.get("/:id", verifyToken, async (req, res) => {
//   try {
//     const posts = await Post.find({ _id: req.params.id })
//       .sort({ createdAt: -1 })
//       .limit(20)
//       .populate("user", ["username", "avatar", "email", "_id"]);

//     res
//       .status(200)
//       .json({ success: true, message: "get post success!", posts });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ success: false, message: "Server error!" });
//   }
// });

module.exports = router;
