// npm install - g json2csv

const {
    Parser
} = require('json2csv');

const myJson = { name: 'Bill', email: 'Bill.Kunneke@Gmail.com', age: 58, kids: 2}
var jsonArray = []
jsonArray.push(myJson)

// var jsonArray = [{
//     name: 'Bill',
//     email: 'Bill.Kunneke@Gmail.com',
//     age: 58,
//     kids: 2
// }]

try {
    const parser = new Parser();
    const csv = parser.parse(jsonArray);
    console.log(csv);
} catch (err) {
    console.error(err);
}
