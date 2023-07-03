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


//products by price for filters


router.get(`/${path}
    /:min_price
    /:max_price
    /:min_quantity
    /:max_quantity
    /:min_discount
    /:max_discount
    `,
    controller.getDataByPrice
    );

//products by review for filters

router.get(`/${path}
    /:min_review
    /:max_review
    `,
    controller.getDataByReview
    );


    




module.exports = router;