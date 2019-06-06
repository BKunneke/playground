const bcrypt = require('bcrypt');
const saltRounds = 10000;
const myPlaintextPassword = 'mysecretpa$$w0rd';

bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
        // Store hash in your password DB.
        console.log(hash)
        bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
            console.log(res)
        })
    });
});
