const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    name: { type : String, required: true }
    , price: { type : Number, required: true }
    , description: { type : String, required: true }
    , region: { type : String, required: true }
    , category: { type : String, }
    , image: { type : String, }
    , rating: { type : Number, }
    , numReviews: { type : Number, }
    , countInStock: { type : Number, }
    , brand: { type : String, }
    , date: { type : Date, default: Date.now }
    , user: { type : mongoose.Schema.Types.ObjectId, ref: 'User' }
    , reviews: [{ type : mongoose.Schema.Types.ObjectId, ref: 'Review' }
    ]
    , isFeatured: { type : Boolean, default: false }
    , isRecommended: { type : Boolean, default: false }
})

module.exports = mongoose.model('Products', ProductsSchema);