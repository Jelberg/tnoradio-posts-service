import multer from "multer";
//import fs from 'file-system';

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/post_images/main");
  },
  filename: (req, file, cb) => {
    console.log("MULTER");
    console.log(file.originalname);
    var filetype = "";

    if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
      filetype = "jpg";
    }
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

export default upload;
