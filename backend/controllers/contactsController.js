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

const createContactController = async (req, res) => {
  const newContact = new Contact(req.body);
  const saveContact = await newContact.save();
  res
    .status(201)
    .json({ message: "Contact successfully created!", data: saveContact });
  try {
  } catch (error) {
    console.error(`Error in createContactController ${error}`);
    res.status(500).json("Internal server error");
  }
};

export { getAllContactsController, createContactController };
