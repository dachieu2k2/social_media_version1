const express = require("express");
const multer = require("multer");
const router = express.Router;

const upload = multer({ dest: "./uploads" });
router.post("/upload", upload.single("avatar"), (req, res) => {
  const fileType = req.file.mimetype.split("/")[1];
  const newFileName = req.file.filename + "." + fileType;
  fs.renameSync(`./uploads/${req.file.filename}`, `./uploads/${newFileName}`);
  res.status(200).json({ success: true, message: "upload success!" });
});

module.exports = router;
