import multer from "multer";
import fs from "fs";
import path from "path";

const folder = "uploads";
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, folder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage });
