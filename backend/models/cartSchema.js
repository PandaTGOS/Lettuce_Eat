let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cartSchema = new Schema({
   item:{
    type: String,
    required: true
  },
  qty:{
    type: Number,
    required: true
  },
  price:{
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Cart', cartSchema);