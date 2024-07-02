const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowedTypes.test(file.mimetype)

    if(extname && mimetype){
        return cb(null, true)
    }else{
        cb('Error: Solo imágenes')
    }
}

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 *1024 * 5},
    fileFilter: fileFilter
})

module.exports = upload