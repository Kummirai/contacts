import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    surname: {
      type: String,
      require: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    jobTitle: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    contact: {
      type: String,
      required: true,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          // Validate phone or email format
          const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
          const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return phoneRegex.test(v) || emailRegex.test(v);
        },
        message: "Please provide a valid phone number or email",
      },
    },
    imgUrl: {
      type: String,
      required: true,
    },
    // User reference (if you have user authentication)
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // If you have user system
      index: true,
    },
  },
  { timestamps: true },
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
