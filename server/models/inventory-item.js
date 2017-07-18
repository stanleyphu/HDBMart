var mongoose = require('mongoose');

var InventoryItem = mongoose.model('InventoryItem', {
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
  InventoryItem
};
