const https = require('https')
const url = 'https://api.darksky.net/forecast/42b87a186eda54d210ae4afc241bdd1a/40,-75'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log(error)
})
request.end()
