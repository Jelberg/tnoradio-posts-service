import multer from "multer";
//import fs from 'file-system';

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/post_images/");
  },
  filename: (req, file, cb) => {
    console.log(file);
    var filetype = "";

    if (file.mimetype === "image/jpeg") {
      filetype = "jpg";
    }
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

export default upload;
