var queryString = 'SELECT * FROM table1 ORDER BY someDate DESC LIMIT 1;'
var resultSet1 = []
connection.query(queryString, (error, resultSet1, fields) => {
    if (error) {
        console.log('ERROR: ' + queryString)
        throw error
    }
})

var queryString = 'SELECT * FROM table2 ORDER BY someDate DESC LIMIT 1;'
var resultSet2 = []
connection.query(queryString, (error, resultSet2, fields) => {
    if (error) {
        console.log('ERROR: ' + queryString)
        throw error
    }
})

// Set some object values based on the two results and render it 

