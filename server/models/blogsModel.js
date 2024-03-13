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
    body: {
      type: [
        {
          heading: {
            type: String,
            required: true,
          },
          paragraph: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
    },
  },{
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);
