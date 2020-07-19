const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    filename: (req, file, cb) => {

        const numRandom = Math.floor(Math.random() * 100101 + 1);

        const nameFoto = numRandom + file.originalname;

        cb(null, nameFoto)
    },
    destination: path.join(__dirname, '../public/uploads') 
});


const midMulter = multer({
    storage,
    limits: {
        fileSize: 10000000
    },
    fileFilter: (req, file, cb) => {
        // console.log("ssssssss");
        const filetypes = /jpg|jpeg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));

        if(mimetype && extname) {
            return cb(null, true);
        }

        cb("Error: Archivo debe ser una imagen válida");
    }
}).single('Foto');

module.exports = {
    midMulter
};