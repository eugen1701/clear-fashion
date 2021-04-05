const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios');
const {MongoClient} = require('mongodb');
const MONGODB_URI = 'mongodb+srv://dbUser:12345678pass@fashioncluster.np6xf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'clearfashion';
const ADRESSEPARIS = 'https://adresse.paris/';

const ADDRESSENEW = 'https://adresse.paris/602-nouveautes';
products = []
class Product{
  constructor(name, price, link, brand){
      this.name = name;
      this.price = price;
      this.link = link;
      this.brand = brand;
  }
}
async function parse(html_DOC){//the function should return a list of json object
  const $ = cheerio.load(html_DOC);
  var productList = [];

  const look = $('.product-container').each((i, el) => {
    const title = $(el)
    .find('.product-name')
    .text().replace(/\s\s+/g, '');
    const price = parseInt(
      $(el).find('.prixright').text()
    )
    const link = $(el)
    .find('.product-name')
    .attr('href');
    product = new Product(title,price, link, 'adresse');
    // console.log(i + ' ' + title + ' ' +price);
    // console.log('\n\n\n');
    products.push(product);
  });
  return look;

}

async function getPage(url = ADDRESSENEW){
  const response = await axios(url);
  const {data, status} = response;
    console.log(status);
    if (status >= 200 && status < 300) {
      return parse(data);
  }
}

async function getAllPages(url = ADRESSEPARIS){
  const response = await axios(url);
  const {data, status} = response;
  urls = [];
  console.log(status);
  if(status>=200 && status <300){
    const $ = cheerio.load(data);  
    $('ul.cbp-links a').each((i, el) =>{//for cheerio you can work like with the query selector
      let url_cat = $(el).attr('href');
      urls.push(url_cat);
    });
    console.log(urls);
    for(var i = 0; i<urls.length;i++){
      await getPage(urls[i]);
    }
    console.log(products);
  }
}  
    // if(!error && response.statusCode >=200){
    //   const $ = cheerio.load(html);
    //   $('.cbp-menu-column-inner').each((i, el)=>{
    //     const title_categorie = $(el).find('li').text();
    //     const links = $(el).find('a').attr('href');
    //     console.log(title_categorie+' '+links+ "\n");
    //   })
  //   }
  // })


async function insertDB(){
  const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
  const db =  client.db(MONGODB_DB_NAME)
  const collection = db.collection('products');
  const result = await collection.insertMany(products);
  console.log(result);
}

async function run(){
  await getAllPages();
  await insertDB();
}

run();

//ask for the city at the end of each question