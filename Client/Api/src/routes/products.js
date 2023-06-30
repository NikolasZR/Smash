const express = require("express");

const controller = require("../controllers/products");



const router = express.Router();

const path = "products";

router.get(`/${path}`,
    controller.getData
);
  
router.post(`/${path}`,
    controller.postData    
)

//products by name 

router.get(`/${path}/:name`,
    controller.getDataByName
); 

//products by id

router.get(`/${path}/:id`,
    controller.getDataById
    );
    


module.exports = router;