//const scrapeAdresseParis = require('./sources/adresseparis.js');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;


const MONGODB_URI = 'mongodb+srv://dbUser:dbUserPassword@fashioncluster.np6xf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'clearfashion';

const productSchema = new mongoose.Schema({
  product_name: {
    type : String,
    required: 'This field is required'
  },
  price: {
    type: String,
    required: 'This field is required'
  }

});
var url = 'mongodb://localhost:27017/';

mongoose.model('Product', productSchema);
const Product = mongoose.model("Product");
// const client = MongoClient.connect(MONGODB_URI, {'useNewURLParser':true});


var products = [{
  'Name': 'Sweatshirt Love VeloSweatshirt Love Velo',
  'Price': '69'
}];
products.forEach(element =>{
  var prod = new Product();
  prod.product_name = element.Name;
  prod.price = element.Price;
  prod.save();
});
// const collection = db.collection('products');
// const result = collection.insertMany(products);


MongoClient.connect(MONGODB_URI, function(err, db){
  if(err) throw err;
  var dbo = db.db("FashionProducts");
  dbo.collection("Fashion").insertOne(products[0], function(err, res){
    if(err) throw err;
    console.log('Firs object was added');
    db.close();
  })
})
