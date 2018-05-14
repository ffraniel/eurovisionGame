const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");

request("http://wiwibloggs.com/lyrics/", function(error, response, html) {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode);
  if (!error) {
    // const $1 = cheerio.load(html);
    // var links = $1('li strong').text().split(":").join(" ");
    let current = [];
    let hrefRegExp = /href="(.*?)" /g;
    current = html.match(hrefRegExp);
    let hrefs = current.map(href => {
      return href.slice(6, -2);
    });
    const list = [];
    hrefs.forEach(link => {
      request(link, function(error, response, body) {
        console.log("error in for each", error);
        console.log("statusCode: ", response && response.statusCode);
        const $ = cheerio.load(body);
        const fullObject = {};


        fullObject.country = ;


      });
    });
  }
});

// fs.writeFile("test.js", body, err => {
//     if (error) {
//       throw error;
//     }
//     console.log("file created");
//   });

// get all eurovisiong songs
var listCountries = [
  "Albania",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "FYR Macedonia",
  "Germany",
  "Georgia",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Israel",
  "Italy",
  "Latvia",
  "Lithuania",
  "Malta",
  "Moldova",
  "Montenegro",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Ukraine",
  "United Kingdom"
];

// get all song lyrics

// save to .json file
