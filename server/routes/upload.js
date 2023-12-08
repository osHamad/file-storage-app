import express from "express";
const router = express.Router();
import uploadModel from "../models/upload.js"
import multer from "multer";
import path from "path"
import { dirname } from "path";
import { fileURLToPath } from "url";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public")
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage
})

router.get('/images', async (req, res) => {
  const storedImages = await uploadModel.find({type: { $in: [ "image/jpeg", "image/png"] }})
  res.json(storedImages)
});

router.post('/', upload.single("file"), (req, res) => {

  const newUpload = new uploadModel(
    {
      name: req.file.originalname,
      type: req.file.mimetype,
      location: req.file.filename
    }
  )

  newUpload.save()

  res.send(newUpload)

});


export default router