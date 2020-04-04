
'use strict';
const response = require('../res/res');
const connection = require('../config/connection');

exports.tb_laporan = function(req, res) {
    connection.query('SELECT * FROM tb_laporan',
    function (data, rows, error) {
        if (data) {
            return res.json(response.error(500,"error"))
        } else {
            return res.json(response.success(rows))
        }
    });
};