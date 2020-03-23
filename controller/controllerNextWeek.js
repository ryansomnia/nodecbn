
'use strict';
const response = require('../res/res');
const connection = require('../config/connection');

exports.tb_nextweek = function(req, res) {
    connection.query('SELECT * FROM tb_nextweek',
     function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};