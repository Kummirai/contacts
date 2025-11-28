import Contact from "../models/contactModel.js";

const getAllContactsController = async (_req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error(`Error in fetching contacts: ${error.message}`);
    res.status(500).json({ succes: false, error: "Internal Server Error" });
  }
};

export { getAllContactsController };
