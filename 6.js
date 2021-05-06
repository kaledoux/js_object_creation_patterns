"use strict";
// Mini Inventory Management System

// Item Manager = object with items array and methods to add, remove, etc
const ItemManager = function(){
  // private data for items
  let items = [];

  return {
    create(itemName, category, quantity) {
      // define function to check validity of new item args
      function invalidItem(name) {
        return name.replace(/\s/g, '').length < 5;
      };
      function invalidCategory(cat) {
        if (cat.split(' ').length > 1) { return true };
        return cat.length < 5;
      };
      function invalidQuantity(x) {
        return typeof x !== 'number';
      };
      function getSKU(name, cat) {
        let first = name.slice(0,3);
        if (first.length < 3) {
          var second = cat.slice(0,3);
        } else {
          var second = cat.slice(0,2);
        }
        return (first + second).toUpperCase();
      }
      // get sku and check that item and cat are valid
      let SKU = getSKU(itemName, category);
      if (invalidItem(itemName) || invalidCategory(category) || invalidQuantity(quantity)) {
        return { notValid: true };
      } else {
        items.push({
          itemName,
          category,
          quantity,
          SKU,
        });
      }
    },

    update(sku, obj) {
      let updatedItem = items.filter(item => item.SKU === sku)[0];
      Object.keys(obj).forEach(property => updatedItem[property] = obj[property]);
    },

    items,

    delete(sku) {
      let i = items.map(obj => obj['SKU']).indexOf(sku); 
      console.log(i);
      items.splice(i, 1);
    },

    inStock() {
      items.forEach(function(item) {
        console.log(item);
      });
    },

    itemsInCategory(category) {
      items.forEach(function(item) {
        if (item.category === category) {
          console.log(item);
        }
      });
    },
  }
}();


// Report Manager something else
let ReportManager = function() {
  let items;

  return {
    init(obj) {
      items = obj;
    },
    createReporter: function(sku) {
      console.log(items);
      let inventory = items[items];
      let model = inventory[inventory.map(obj => obj['SKU']).indexOf(sku)]
      return {
        itemInfo() {
          Object.keys(model).forEach(property => {
            console.log(`${property}: ${model[property]}`);
          });
        },
      }
    }(),

//     createReporter(sku) {
//       let inventory = items.items;
//       let newObj = {};
//       let model = inventory[inventory.map(obj => obj['SKU']).indexOf(sku)]
// 
//       Object.keys(model)
//             .forEach(property => newObj[property] = model[property]);
// 
//       newObj.itemInfo = function() {
//         Object.keys(this).forEach(property => {
//           console.log(`${property}: ${this[property]}`);
//         });
//       }
//       return newObj;
//     },
    reportInStock() {
      items.inStock();  
    },
  }
}();
ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;       

ReportManager.init(ItemManager);
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
ReportManager.reportInStock();
ItemManager.itemsInCategory('sports');
ItemManager.delete('SOCSP');
ItemManager.items;

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
