const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");

const songInfo = [
    {Country:"Ukraine", Song:"Under the Ladder", Language: "English"},
    {Country: "Spain", Song:"Tu canción", Language: "Spanish"},
    {Country: "Slovenia", Song:"Hvala, ne!", Language: "Slovene[g]"},
    {Country: "Lithuania", Song:"When We're Old", Language: "English[a]"},
    {Country: "Austria", Song:"Nobody but You", Language: "English"},
    {Country: "Estonia", Song:"La forza", Language: "Italian"},
    {Country: "Norway", Song:"That's How You Write a Song", Language: "English"},
    {Country: "Portugal", Song:"O jardim", Language: "Portuguese"},
    {Country: "United Kingdom", Song:"Storm", Language: "English"},
    {Country: "Serbia", Song:"Nova deca ", Language: "Serbian[d]"},
    {Country:"Germany", Song:"You Let Me Walk Alone", Language: "English"},
    {Country:"Albania", Song:"Mall", Language: "Albanian"},
    {Country:"France", Song:"Mercy", Language: "French"},
    {Country:"Czech Republic", Song:"Lie to Me", Language: "English"},
    {Country:"Denmark", Song:"Higher Ground", Language: "English[e]"},
    {Country:"Australia", Song:"We Got Love", Language: "English"},
    {Country:"Finland", Song:"Monsters", Language: "English"},
    {Country:"Bulgaria", Song:"Bones", Language: "English"},
    {Country:"Moldova", Song:"My Lucky Day", Language: "English"},
    {Country:"Sweden", Song:"Dance You Off", Language: "English"},
    {Country:"Hungary", Song:"Viszlát nyár", Language: "Hungarian"},
    {Country:"Israel", Song:"Toy", Language: "English[b]"},
    {Country:"Netherlands", Song:"Outlaw in 'Em", Language: "English"},
    {Country:"Ireland", Song:"Together", Language: "English"},
    {Country:"Cyprus", Song:"Fuego", Language: "English[c]"},
    {Country:"Italy", Song:"Non mi avete fatto niente", Language: "Italian"}
];

function writeData (data){
    fs.writeFile("lyricsJson.json", JSON.stringify(data), 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("saved it!");
    }); 
}
var allSongs = [];

request("https://genius.com/albums/Various-artists/Eurovision-song-contest-lisbon-2018", function(error, response, body) {
//   console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode);
  if (!error) {
    const $1 = cheerio.load(body);
    const list = [];
    $1('.chart_row-content').each(function (index, element) {
        let link = $1(element).children('a').attr('href');
        list.push(link);
    });

    list.forEach((songLink) => {
      request(songLink, function(error, response, html) {
        // console.log("error in song link", error);
        console.log("statusCode: ", response && response.statusCode);
        const $ = cheerio.load(html);
        const fullObject = {};
        fullObject.artist = $('.header_with_cover_art-primary_info-primary_artist').text();
        fullObject.title = $('.header_with_cover_art-primary_info-title').text();
        songInfo.forEach((onesong)=>{
            if(onesong.Song === fullObject.title){
                fullObject.country = onesong.Country;
            }
        })

        fullObject.image = $('.cover_art-image').attr('src');
        fullObject.youtube = "";
        fullObject.lyrics = $('.lyrics').children('p').text();
        allSongs.push(fullObject);
      });
    });


  }
});
if(allSongs.length < 20){
    setTimeout(function(){
        writeData(allSongs)
console.log(allSongs)

    }, 18000 )
}



