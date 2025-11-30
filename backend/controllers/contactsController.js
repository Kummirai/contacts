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
  res.status(201).json({
    success: true,
    message: "Contact successfully created!",
    data: saveContact,
  });
  try {
  } catch (error) {
    console.error(`Error in createContactController ${error}`);
    res.status(500).json("Internal server error");
  }
};

const getContactByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findOne({ _id: id });
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    console.error(`Error in getContactByIdController: ${error}`);
    res.status(500).json("Internal server error");
  }
};

const deleteContactController = async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.findOneAndDelete({ _id: id });
    res
      .status(200)
      .json({ success: true, message: "Contact successfully deleted!" });
  } catch (error) {
    console.error(`Error in deleteContactController: ${error}`);
    res.status(500).json("Internal server error");
  }
};

const updateContactController = async (req, res) => {
  const { id } = req.params;
  ``;

  try {
    const editContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Contact updated successfully!",
      data: editContact,
    });
  } catch (error) {
    console.error(`Error in updateContactControler: ${error}`);
    res.status(500).json("Internal server error");
  }
};

const getCategoryController = async (req, res) => {
  const { category } = req.params;
  console.log(category);
};

export {
  getAllContactsController,
  createContactController,
  getContactByIdController,
  deleteContactController,
  updateContactController,
  getCategoryController,
};
