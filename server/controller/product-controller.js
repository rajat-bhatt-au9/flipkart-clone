import Product from "../model/productSchema.js";

export const getProducts = async (req, res) => {
  try {
    let products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.log("error: ", err.message);
  }
};
