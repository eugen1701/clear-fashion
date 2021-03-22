const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios');
const {MongoClient} = require('mongodb');
const MONGODB_URI = 'mongodb+srv://dbUser:<password>@fashioncluster.np6xf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'clearfashion';
const ADRESSEPARIS = 'https://adresse.paris/';

const ADDRESSENEW = 'https://adresse.paris/602-nouveautes';
products = []
class Product{
  constructor(name, price){
      this.name = name;
      this.price = price;
  }
}
function parse(html_DOC){//the function should return a list of json object
  const $ = cheerio.load(html_DOC);
  var productList = [];

  const look = $('.product-container').each((i, el) => {
    const title = $(el)
    .find('.product-name')
    .text().replace(/\s\s+/g, '');
    const price = parseInt(
      $(el).find('.prixright').text()
    )
    product = Product(title,price);
    console.log(i + ' ' + title + ' ' +price);
    console.log('\n\n\n');
    products.push(product);

  });


}

function getPage(url = ADDRESSENEW){
  request(url, (error, response, html) => {
    console.log(response.statusCode);
    if(!error && response.statusCode >= 200){//why do I get a 403 status code?
      // console.log(html);//but i still get an html
      parse(html);
    }//like, 403 is forbidden but i still get some data
  });
}
//getPage();

function getAllPages(url = ADRESSEPARIS){
  request(url,(error, response, html)=>{
    console.log(response.statusCode);
    if(!error && response.statusCode >=200){
      const $ = cheerio.load(html);
      $('.cbp-menu-column-inner').each((i, el)=>{
        const title_categorie = $(el).find('li').text();
        const links = $(el).find('a').attr('href');
        console.log(title_categorie+' '+links+ "\n");
      })
    }
  })
}

function insertDB(){
  const client = MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true},
    function(err, db){
      if (err) throw err;
      var dbo = db.db(MONGODB_DB_NAME);
      products.forEach(function(el){
        dbo.collection('products').insertOne(el), function(err, res){
          if (err) throw err;
          console.log('1 inserted');
        }
      })
    });


}

// module.exports.getAllPages = async (url = ADRESSEPARIS)=>{
//   const response
// }
getAllPages();
insertDB();
