// Open a json document, change some data, write the update back to the file.

const fs = require('fs')
const fileName = '1-json.json'
// Open the json file 
const dataBuffer = fs.readFileSync(fileName)

// Convert the json object from the file buffer to a string
const dataJSON = dataBuffer.toString()

// Parse the string representation of the data
const user = JSON.parse(dataJSON)

// Change the data in the parsed representation of the data
user.name = 'William'
user.age = 48

// Set the updated data back to a string
userJSON = JSON.stringify(user)

// Write the data back out
fs.writeFileSync(fileName, userJSON)
