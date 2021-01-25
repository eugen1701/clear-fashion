// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}]

console.table(MY_FAVORITE_BRANDS);
//console.log(MY_FAVORITE_BRANDS[0]);





/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable

const cheapTshirt = 'https://hopaal.com/collections/t-shirts-homme/products/classique-forest-t-shirt-homme';
console.log(cheapTshirt);


/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable

let no_products = marketplace.length;
console.log(no_products); //the number is 140

// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have

var brandList = [];

for (var i in marketplace){
  brandList.push(marketplace[i].brand)
}

var unique_brandList = [];

while(brandList.length !=0 ){
  let brand = brandList.pop();
  let i = 0;
  while(i<unique_brandList.length && brand!=unique_brandList[i]){
    i++;
  }
  if(i === unique_brandList.length){
    unique_brandList.push(brand);
  }

}
console.log(unique_brandList);//(5) ["dedicated", "loom", "1083", "adresse", "aatise"]

//
//
// //another version
//
// const brandList = marketplace.map(product => product.brand);
// console.log(new Set(brandList))
// let unique = [...new Set(brandList)]
// console.log(unique)

// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable

function sortByPrice(product1, product2){
  return product1.price-product2.price
}
var productsSortedByPrice = marketplace.sort(sortByPrice);
console.log(productsSortedByPrice);

// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable

function sortByDate(p1,p2){
  var dateP1=new Date(p1.date);
  var dateP2=new Date(p2.date);
  return dateP1-dateP2;
}

var productsSortedByDate = marketplace.sort(sortByDate);
console.log(productsSortedByDate);


// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list
var productsBetween50and100 = []
for(var i in marketplace){
  if(marketplace[i].price > 50 && marketplace[i].price < 100){
    productsBetween50and100.push(marketplace[i])
  }
}
console.log(productsBetween50and100);//48 products

// 🎯 TODO: Average Basket
// 1. Determine the average basket of the marketplace
// 2. Log the average

let avgBasket = 0;
let totalBasket = 0;
for(var i in marketplace){
  totalBasket+=marketplace[i].price;
}

avgBasket = totalBasket/marketplace.length;
console.log(avgBasket);



/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
//

//practicly we have to do a dictionary

let brands = {}
for(var i in unique_brandList){
  brands[unique_brandList[i]] = []
}
for(var i in marketplace){
  let brand = marketplace[i].brand;
  let obj = {};
  for(var attr in marketplace[i]){
    if(attr != 'brand'){
      if(marketplace[i].hasOwnProperty(attr)){
        obj[attr] = marketplace[i][attr];
      }
    }

  }

  brands[brand].push(obj);
}

// 2. Log the variable

console.log(brands);


// 3. Log the number of products by brands

for(var i in unique_brandList){
  var stringToLog = unique_brandList[i]+' has the number of items equal to : '+ brands[unique_brandList[i]].length.toString();
  console.log(stringToLog);
}


// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort
for(var i in unique_brandList){
  brands[unique_brandList[i]].sort(sortByPrice);
}
for(var i in unique_brandList){
  console.log('The products in increasing order by price and by store '+unique_brandList[i]+' are: ');
  for(var j in brands[unique_brandList[i]]){
    console.log(brands[unique_brandList[i]][j]);
  }
}

// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort

for(var i in unique_brandList){
  brands[unique_brandList[i]].sort(sortByDate);
}
for(var i in unique_brandList){
  console.log('The products in increasing order by date and by store '+unique_brandList[i]+' are: ');
  for(var j in brands[unique_brandList[i]]){
    console.log(brands[unique_brandList[i]][j]);
  }
}



/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products


//I don't het what is p90


/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.

function checkNew(product){
  let numWeeks = 2;
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate()-(numWeeks*7));//we get the day of 2 weeks ago
  let productDate = new Date(product.released);
  if(productDate < twoWeeksAgo){
    return false;
  }
  return true;
}
let everyNew = true;
for(var i in COTELE_PARIS){
  everyNew = checkNew(COTELE_PARIS[i]);
}

console.log(everyNew);

// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€
var resonable = true;
for(var i in COTELE_PARIS){
  if(COTELE_PARIS[i].price >100){
    resonable = false;
  }
}
console.log('Is coteleparis a resonable store? Ans:'+resonable.toString());

// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product
var product;
for(var i in COTELE_PARIS){
  if(COTELE_PARIS[i].uuid === 'b56c6d88-749a-5b4c-b571-e5b5c6483131'){
    product = COTELE_PARIS[i];
  }
}
console.log(product);

// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product
var i = 0;
while(i<COTELE_PARIS.length){
  if(COTELE_PARIS[i].uuid === 'b56c6d88-749a-5b4c-b571-e5b5c6483131'){
    COTELE_PARIS.pop(COTELE_PARIS[i]);
    }
  
  i++;
}

console.log(COTELE_PARIS);

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;
jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
// 2. What do you notice?
console.log(blueJacket);
console.log(jacket);
//we notice that both of the have property "favorite: true" even if we seted the property just for one of them
blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties
jacket = {};
for(var attr in blueJacket){
  jacket[attr]=blueJacket[attr];
}
jacket.favorite=true;
console.log("After changing just the jacket")
console.log(blueJacket);
console.log(jacket);


/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
var myStorage = window.localStorage;
var textFile = null;
window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
window.requestFileSystem(window.PERSISTENT, 1024, function(fs) {
    fs.root.getFile('mystorage.txt', {create: true, exclusive: true}, function(file) {
        file.createWriter(function(writer) {
            var blob = new Blob(MY_FAVORITE_BRANDS, {type: 'text/plain'});
            writer.write(blob);
        });
    });
}, function() {
    console.log("Could not access file system");
});
console.log(window.localStorage);