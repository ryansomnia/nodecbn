
'use strict';
const response = require('../res/res');
const connection = require('../config/connection');

exports.tb_jemaat = function(req, res) {
    connection.query('SELECT * FROM tb_jemaat',
    function (data, rows, error) {
        if (data) {
            return res.json(response.error(500,"error"))
        } else {
            return res.json(response.success(rows))
        }
    });
};
exports.findJemaat = function(req, res) {
    
    var id = req.params.id;

    connection.query('SELECT * FROM tb_jemaat where idJemaat = ?',
    [ id ], 
    function (data, rows, error) {
        if (data) {
            return res.json(response.error(500,"error"))
        } else  {
            return res.json(response.success(rows))
        }
    });
};

exports.createJemaat = function(req, res) {
    let idJemaat = req.body.idJemaat;
    let namaDepan = req.body.namaDepan;
    let namaBelakang = req.body.namaBelakang;
    let status = req.body.status;
    let tanggalLahir = req.body.tanggalLahir;
    let tempatLahir= req.body.tempatLahir;
    let alamat = req.body.alamat;
    let tanggalBaptis = req.body.tanggalBaptis;


    connection.query('INSERT INTO tb_jemaat (idJemaat, namaDepan, namaBelakang, status, tanggalLahir, tempatLahir, alamat, tanggalBaptis) values (?,?,?,?,?,?,?,?)',
    [ idJemaat, namaDepan, namaBelakang, status, tanggalLahir, tempatLahir, alamat, tanggalBaptis ], 
    function (data, rows, error) {
        if (data) {
            return res.json(response.error(500,"error"))
        } else {
            return res.json(response.success(rows))
        }
    });
};

exports.updateJemaat = function(req, res) {
    
    let idJemaat = req.body.idJemaat;
    let namaDepan = req.body.namaDepan;
    let namaBelakang = req.body.namaBelakang;
    let status = req.body.status;
    let tanggalLahir = req.body.tanggalLahir;
    let tempatLahir= req.body.tempatLahir;
    let alamat = req.body.alamat;
    let tanggalBaptis = req.body.tanggalBaptis;

    connection.query('UPDATE tb_jemaat SET namaDepan = ?, namaBelakang = ?, status = ?, tanggalLahir = ?, tempatLahir = ?, alamat = ?, tanggalBaptis = ? WHERE idJemaat = ?',
    
    [ namaDepan, namaBelakang, status, tanggalLahir, tempatLahir, alamat, tanggalBaptis, idJemaat ], 
    function (data, rows, error) {
        if (data) {
            return res.json(response.error(500,"error"))
        } else {
            return res.json(response.success(req.body)) 
        }
    });
};

exports.deleteJemaat = function(req, res) {
    
    var idJemaat = req.body.idJemaat;

    connection.query('DELETE FROM tb_jemaat WHERE idJemaat = ?',
    [ idJemaat ], 
    function (data, rows, error) {
        if (data) {
            return res.json(response.error(500,"error"))
        } else {
            return res.json(response.success(rows))
        }
    });
};




