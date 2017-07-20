var uuid = require('node-uuid');

module.exports = {
  getInventory: function () {
    var inventory = [
      {
        name: "Bread with Nutella",
        price: 0.50,
        stock: 8,
        id: uuid()
      },
      /*
      {
        name: "Everything Bagel with Cream Cheese",
        price: 1.25,
        stock: 4,
        id: uuid()
      },
      */
      {
        name: "Plain Bagel with Cream Cheese",
        price: 1.25,
        stock: 3,
        id: uuid()
      },
      {
        name: "Hershey\'s Cookies & Cream",
        price: 0.85,
        stock: 1,
        id: uuid()
      },
      {
        name: "Trident Gum (2)",
        price: 0.25,
        stock: 6,
        id: uuid()
      },
      {
        name: "Cheetos Crunchy",
        price: 0.25,
        stock: 6,
        id: uuid()
      },
      {
        name: "Lays Classic",
        price: 0.25,
        stock: 2,
        id: uuid()
      },
      {
        name: "Fritos Original",
        price: 0.25,
        stock: 1,
        id: uuid()
      },
      {
        name: "Flaming Hot Lay\'s (Medium Size)",
        price: 0.35,
        stock: 2,
        id: uuid()
      },
      {
        name: "Flaming Hot Funyuns (Medium Size)",
        price: 0.35,
        stock: 2,
        id: uuid()
      },
      {
        name: "Flaming Hot Cheetos (Medium Size)",
        price: 0.35,
        stock: 4,
        id: uuid()
      },
      {
        name: "Flaming Hot Lime Cheetos (Medium Size)",
        price: 0.35,
        stock: 1,
        id: uuid()
      },
      {
        name: "Doritos Dinamita Lemon Chile (Medium Size)",
        price: 0.35,
        stock: 4,
        id: uuid()
      },
      {
        name: "Cheetos Cheddar Jalapenos (Medium Size)",
        price: 0.35,
        stock: 2,
        id: uuid()
      },
      {
        name: "Flaming Hot Cheetos (Large Size)",
        price: 0.50,
        stock: 7,
        id: uuid()
      },
      {
        name: "Flaming Hot Lime Cheetos (Large Size)",
        price: 0.50,
        stock: 1,
        id: uuid()
      },
      {
        name: "Flaming Hot Fritos (Large Size)",
        price: 0.50,
        stock: 5,
        id: uuid()
      },
      {
        name: "Fruit Snacks Healthy (2)",
        price: 0.25,
        stock: 10,
        id: uuid()
      },
      {
        name: "Fruit Grain Mixed Berry Bar",
        price: 0.35,
        stock: 7,
        id: uuid()
      },
      {
        name: "Chocolate Chip Chewy Bar",
        price: 0.25,
        stock: 8,
        id: uuid()
      },
      {
        name: "Siracha Chicken Flavor Cup Noodle",
        price: 0.50,
        stock: 3,
        id: uuid()
      },
      /*
      {
        name: "Lime Chili Flavor Cup Noodle",
        price: 0.50,
        stock: 2,
        id: uuid()
      },
      */
      {
        name: "Hot and Spicy Tom Yum Cup Noodles",
        price: 0.75,
        stock: 6,
        id: uuid()
      },
      {
        name: "Kopiko Coffee Candy (2)",
        price: 0.25,
        stock: 10,
        id: uuid()
      },
      {
        name: "Water bottle",
        price: 0.75,
        stock: 20,
        id: uuid()
      },
      {
        name: "Gatorade (Lemon-Lime)",
        price: 1.00,
        stock: 2,
        id: uuid()
      },
      {
        name: "Starbucks Mocha Frappuccino",
        price: 2.00,
        stock: 1,
        id: uuid()
      },
      {
        name: "Hansen Diet Soda (Orange Lime) - NO CALORIES OR SUGAR",
        price: 0.75,
        stock: 2,
        id: uuid()
      },
      {
        name: "Hansen Soda (Orange)",
        price: 0.75,
        stock: 2,
        id: uuid()
      },
      {
        name: "Sanpelligrino (Orange)",
        price: 1.00,
        stock: 3,
        id: uuid()
      },
      {
        name: "Emergen-C Packet (Orange)",
        price: 0.50,
        stock: 5,
        id: uuid()
      }
    ];

    return inventory;
  },
  findInventoryItem: function (inventory, name) {
    var checkName = (inventoryItem) => {
      return inventoryItem.name === name;
    }

    var item = inventory.find(checkName);
    return item;
  }
};
