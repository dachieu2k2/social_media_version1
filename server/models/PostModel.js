const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  commenterId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  comment: String,
}, {
    timestamps: true,
    versionKey: false,
  })

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    likers: {
      type: [String],
    },
    comments: [CommentSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("posts", PostSchema);
