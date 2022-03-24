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
    let newFileName;
    if (req.files.post) {
      console.log();
      const fileType = req.files["post"][0]?.mimetype.split("/")[1];
      newFileName = req.files["post"][0].filename + "." + fileType;
      fs.renameSync(
        `./uploads/${req.files["post"][0].filename}`,
        `./uploads/${newFileName}`
      );
    }

    try {
      const data = fs.readFileSync(
        `./uploads/${req.files["document"][0].filename}`,
        {
          encoding: "utf8",
          flag: "r",
        }
      );
      fs.unlinkSync(`./uploads/${req.files["document"][0].filename}`);
      //   const data = ${req.files["document"][0]
      // console.log(data);
      const json = JSON.parse(data);
      const { title, description } = json;
      const newPost = new Post({
        title,
        description,
        image: req.files.post ? process.env.API + "/static/" + newFileName : "",
        user: req.userId,
        likers: [],
        comments: [],
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
    let posts = await Post.find({})
      .sort({ createdAt: -1 })
      .limit(20)
      .populate("user", ["username", "avatar", "email", "_id"]);

    posts = posts.map(async (post) => {
      comments = await Promise.all(
        post.comments.map(async (comment) => {
          const user = await User.findById(comment.commenterId).select(
            "username avatar"
          );
          return Object.assign(comment.toObject(), {
            commenter: user,
            _id: comment._id,
          });
        })
      );
      return Object.assign(post.toObject(), { comments });
    });

    res.status(200).json({
      success: true,
      message: "get post success!",
      posts: await Promise.all(posts),
    });
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

router.post("/:postId/", verifyToken, async (req, res) => {
  try {
    const { postId } = req.params;
    const { comment } = req.body;
    const commenterId = req.userId;
    const newComment = { comment, commenterId };
    await Post.findByIdAndUpdate(postId, {
      $push: { comments: newComment },
    });
    const user = await User.findById(commenterId).select("username avatar");
    res.json({
      success: true,
      comment: { ...newComment, commenter: user },
    });
  } catch (e) {
    res.json({
      success: false,
      comment: null,
    });
  }
});

module.exports = router;
