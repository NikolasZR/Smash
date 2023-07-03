const model = require("../models/products");

// exports getData function to get all products from the database use model of products

exports.getData = (req, res) => {
  model
    .find()
    .then((result) => {
      res.status(200).json({
        message: "Products fetched successfully",
        products: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error in database",
        error: err,
      });
    });
};


//function to post products in the database use model of products 


exports.postData = (req, res) => {
    const product = new model({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
    region: req.body.region,
  });
  product.save()
    .then((result) => {
      res.status(201).json({
        message: "Product added successfully",
        product: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error in database",
        error: err,
      });
    });
}



//getProducts by name function to get products by name from the database use model of products


exports.getDataByName = (req, res) => {
  model
    .find({ name: req.params.name })
    .then((result) => {
      res.status(200).json({
        message: "Products fetched successfully",
        products: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error in database",
        error: err,
      });
    });
}

//getDataById function to get products by id from the database use model of products



exports.getDataById = (req, res) => {
  model
    .findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Product fetched successfully",
        product: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error in database",
        error: err,
      });
    });
}


//getDataByPrice for filters by price from the database use model of products


exports.getDataByPrice = (req, res) => {
  model
    .find({ price: { $gte: req.params.price } })
    .then((result) => {
      res.status(200).json({
        message: "Products fetched successfully",
        products: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error in database",
        error: err,
      });
    });
}


//getDataByReview for filters by review from the database use model of products


exports.getDataByReview = (req, res) => {
  model
    .find({ review: { $gte: req.params.review } })
    .then((result) => {
      res.status(200).json({
        message: "Products fetched successfully",
        products: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error in database",
        error: err,
      });
    });
}


