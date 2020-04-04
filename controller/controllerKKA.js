'use strict';
const response = require('../res/res');
const connection = require('../config/connection');

exports.tb_kkas = function(req, res) {
    connection.query('SELECT * FROM tb_kkas',
    function (data, rows, error) {
        if (data) {
            return res.json(response.error(500,"error"))
        } else {
            return res.json(response.success(rows))
        }
    });
};

exports.findKKA = function(req, res) {
    
    var id = req.params.id;

    connection.query('SELECT * FROM tb_kkas where idKKA = ?',
    [ id ], 
    function (data, rows, error) {
        if (data) {
            return res.json(response.error(500,"error"))
        } else {
            return res.json(response.success(rows))
        }
    });
};

exports.createKKA = function(req, res) {
    let idKKA = req.body.idKKA;
    let namaKka = req.body.namaKka;
    let namaKetua = req.body.namaKetua;
    let namaPembina = req.body.namaPembina;

    connection.query('INSERT INTO tb_kkas (idKKA, namaKka, namaKetua, namaPembina) values (?,?,?,?)',
    [ idKKA, namaKka, namaKetua, namaPembina ], 
    function (data, rows, error) {
        if (data) {
            return res.json(response.error(500,"error"))
        } else {
            return res.json(response.success(req.body)) 
        }
    });
};

exports.updateKKA = function(req, res) {
    
    var idKKA = req.body.idKKA;
    var namaKka = req.body.namaKka;
    var namaKetua = req.body.namaKetua;
    var namaPembina = req.body.namaPembina;

    connection.query('UPDATE tb_kkas SET namaKka = ?, namaKetua = ?, namaPembina = ? WHERE idKKA = ?',
    
    [ namaKka, namaKetua, namaPembina, idKKA ], 
    function (data, rows, error) {
        if (data) {
            return res.json(response.error(500,"error"))
        } else {
            return res.json(response.success(req.body))
        }
    });
};

exports.deleteKKA = function(req, res) {
    
    var idKKA = req.body.idKKA;

    connection.query('DELETE FROM tb_kkas WHERE idKKA = ?',
    [ idKKA ], 
    function (data, rows, error) {
        if (data) {
            return res.json(response.error(500,"error"))
        } else {
            return res.json(response.success(rows))
        }
    });
 };

exports.index = function(req, res) {
    response.success("Hello from the Node JS RESTful side!", res)
};