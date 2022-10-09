import mongoose from "mongoose";

const PostShema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// module.exports = mongoose.model("Posts", PostShema);

export default mongoose.model("posts", PostShema);
