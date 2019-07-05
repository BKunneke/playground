

// var queryString = 'SELECT * FROM table1 ORDER BY someDate DESC LIMIT 1;'
// var resultSet1 = []
// connection.query(queryString, (error, resultSet1, fields) => {
//     if (error) {
//         console.log('ERROR: ' + queryString)
//         throw error
//     }
// })

// var queryString = 'SELECT * FROM table2 ORDER BY someDate DESC LIMIT 1;'
// var resultSet2 = []
// connection.query(queryString, (error, resultSet2, fields) => {
//     if (error) {
//         console.log('ERROR: ' + queryString)
//         throw error
//     }
// })

module.exports = (obj) => {
    var promises = [];

    var queryString1 = 'SELECT * FROM table1 ORDER BY someDate DESC LIMIT 1;';
    var queryString2 = 'SELECT * FROM table2 ORDER BY someDate DESC LIMIT 1;'

    promises.push(connection.query(queryString1)); // results[0]
    promises.push(connection.query(queryString2)); // results[1]

    // Set some object values based on the two results and render it 

    Promise.all(promises)
        .then(results => {
            // results is an array of results correlating to promise array
            // do something
            // return new obj
        })
        .catch(err => {
            // do something
            //
        });
}


module.exports = asyc (obj) => {
    try {
        // do this
        var results1 = await connection.query('SELECT * FROM table1 ORDER BY someDate DESC LIMIT 1;');
        // stop
        // now do this
        var results2 = await promises.push(connection.query('SELECT * FROM table2 ORDER BY someDate DESC LIMIT 1;'));
        // stop
        // now do this

        // do something to combined results
        // return

    } catch(e) {
        //
    }

}

// In the parent:
// const sqlPromise = require('sql-promise');
// const whatever = sqlPromise(obj)
