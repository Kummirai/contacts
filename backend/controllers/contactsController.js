const getAllContactsController = async (_req, res) => {
  res.status(200).json({ message: "Here are all your contacts!" });
};

export { getAllContactsController };
