import product from "../Models/product-model.js";

export const postProductData = async (req, res) => {
  try {
    const { name, description, price, quantity, user } = req.body;
    const image = request.file && request.file.filename;
    console.log(name, description, price, quantity,image);
    const isProductExisted = await product.findOne({ name: name });
    if (isProductExisted) {
      return res.status(400).json({ message: "Product is already existed" });
    }

    const productData = product({
      name,
      description,
      price,
      quantity,
      user,
      image,
    });
    
    await productData.save();
    return res
      .status(200)
      .json({ message: "data saved succesfully", success: true, productData });
  } catch (error) {
    console.error(error)
    res.status(500).json(error.message);
  }
};

export const getProductsData = async (req, res) => {
  try {
    const getProducts = await product.find();
    return res.status(200).json({ success: true, getProducts });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const getProductId = req.params.id;
    const productData = await product.findById(getProductId);
    if (!productData) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res
      .status(200)
      .json({ success: true, productData, message: "got product data" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateProductData = async (req, res) => {
  try {
    const getProductId = req.params.id;
    const productData = await product.findById(getProductId);
    if (!productData) {
      return res.status(404).json({ message: "Product not found" });
    }

    const { name, description, price, quantity } = req.body;
    productData.name = name;
    productData.description = description;
    productData.price = price;
    productData.quantity = quantity;

    await productData.save();
    return res.status(200).json({
      message: "data updated succesfully",
      success: true,
      productData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteProductData = async (req, res) => {
  try {
    const getProductId = req.params.id;
    const productData = await product.findByIdAndRemove(getProductId);
    if (!productData) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res
      .status(200)
      .json({ message: "data deleted succesfully", success: true });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getProductsByUserId = async (request, response) => {
    try {
        const productData = await product.find().populate("user");
        return response.status(200).json({
            success: true,
            productData,
            message: "GOT PRODUCTS BY USER ID"
        })
    } catch (error) {
        return response.status(500).json(error.message)
    }
};
// Filter products by category
export const getProductsByCategory = async (req, res) => {
  const { category } = req.query;

  try {
      const products = await product.find({ category });
      res.status(200).json(products);
  } catch (err) {
      res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
};