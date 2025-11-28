import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    require: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
