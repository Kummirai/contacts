import Contact from "../models/contactModel.js";

const getAllCategoriesController = async (req, res) => {
  try {
    const allCategories = await Contact.distinct("category");
    res.status(200).json({
      success: true,
      message: "Categories successfully retrieved!",
      data: allCategories,
    });
  } catch (error) {
    console.error(`Error in getAllCategoriesController: ${error}`);
    res.status(200).json("Internal server error");
  }
};

const getCategoryController = async (req, res) => {
  const { category } = req.params;
  try {
    const selectedCategory = await Contact.find({ category: category });
    res.status(200).json({
      succes: true,
      message: "Contacts retrieved!",
      data: selectedCategory,
    });
  } catch (error) {
    console.error(`Error in getCategoryController: ${error}`);
    res.status(500).json("Internal server error");
  }
};

export { getAllCategoriesController, getCategoryController };
