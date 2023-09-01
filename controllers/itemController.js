const itemModels = require("../models/itemModels");

// get items
const getItemController = async (req, res) => {
  try {
    const items = await itemModels.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};

//add items
const addItemController = async (req, res) => {
  try {
    const newItem = new itemModels(req.body);
    await newItem.save();
    res.status(201).send("Item Created Success");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

//update item
const editItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    console.log(itemId);
    await itemModels.findOneAndUpdate({ _id: itemId }, req.body, {
      new: true,
    });

    res.status(201).json("Item Updated Success");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};
//delete item
const deleteItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    console.log(itemId);
    await itemModels.findOneAndDelete({ _id: itemId });
    res.status(200).json("Item Deleted Success");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports = {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
};