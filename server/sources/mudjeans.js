const request = require('request');
const cheerio = require('cheerio');

const MUDJEANS = 'https://mudjeans.eu/';

const MUD_WOOMEN = 'https://mudjeans.eu/collections/women-jeans';

function parse(html_DOC){
  const $ = cheerio.load(html_DOC);
  const look = $('.product-title');
  console.log(look.html());

}

function getPage(url = MUD_WOOMEN){
  request(url, (error, response, html) => {
    if(!error && response.statusCode >= 200){//why do I get a 403 status code?
      // console.log(html);//but i still get an html
      parse(html);
    }//like, 403 is forbidden but i still get some data
  });
}
getPage();
