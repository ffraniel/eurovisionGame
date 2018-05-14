// const request = require("request");
// const fs = require("fs");
// const cheerio = require("cheerio");

// request('https://en.wikipedia.org/wiki/Eurovision_Song_Contest_2018', function(error, response, body) {
//     if(!error) {
//         console.log("statusCode: ", response && response.statusCode);
//         const $2 = cheerio.load(body);
//         const songTitle = "Bones";
//         let table = $2('.sortable .wikitable .jquery-tablesorter').text()

//         console.log(table)
//     }
//     else {console.log("error: ", error)}
// })

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
console.log(songInfo)
