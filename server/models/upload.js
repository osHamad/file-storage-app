import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create schema for todo
const UploadSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
  type: {

  },
  location: {
    
  }
});

// Create model for todo
const Upload = mongoose.model('upload', UploadSchema);

export default Upload