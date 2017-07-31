var mongoose = require('mongoose');

var Item = mongoose.model('Item', {
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
});

module.exports = {
  Item
};
