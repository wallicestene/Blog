import mongoose from "mongoose";
const Schema = mongoose.Schema;
const blogSchema = new Schema(
  {
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    image:{
      type: String,
      required: true, 
    },
    body: {
      type:  String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    }
  },{
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);
