import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import upload from "./routes/upload.js"
import dotenv from "dotenv"
import cors from "cors";

dotenv.config()

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("public"))

// Connect to the database
mongoose
  .connect(process.env.URI, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use('/upload', upload);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});