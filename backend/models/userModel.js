import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      select: false,
    },
    contacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contact", // Assuming you have a Contact model
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  },
);

const User = mongoose.model("User", userSchema);

export default User;
