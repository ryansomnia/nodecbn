const response = require('../res/res');
const connection = require('../config/connection');

const users = function (req, res) {
    connection.query('SELECT * FROM tb_kkas', function(error, rows, field) {
        if (error) {
            console.log(error);
        } else{
            response.ok(rows, res)
        }
            
            
        
    )};
};
module.exports = users;