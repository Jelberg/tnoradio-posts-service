import multer from "multer";
//import fs from 'file-system';

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.originalname !== undefined && 
            file.originalname !== null && 
            file.originalname.includes("profile")) 
                cb(null, 'public/user_images/profiles');
        else
            if (file.originalname !== undefined && 
                file.originalname !== null && 
                file.originalname.includes("talent"))
                    cb(null, 'public/user_images/talents');
            else
                cb(null, 'public/user_images/');     
    },
    filename: (req, file, cb) => {
        console.log(file);
        var filetype = '';

        if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
        }
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });

export default upload;