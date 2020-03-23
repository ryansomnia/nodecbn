
'use strict';
const response = require('../res/res');
const connection = require('../config/connection');

exports.tb_jemaat = function(req, res) {
    connection.query('SELECT * FROM tb_jemaat',
     function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.findJemaat = function(req, res) {
    
    var id = req.params.id;

    connection.query('SELECT * FROM tb_jemaat where idJemaat = ?',
    [ id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
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
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan data Jemaat", res)
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
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah data!", res)
        }
    });
};

exports.deleteJemaat = function(req, res) {
    
    var idJemaat = req.body.idJemaat;

    connection.query('DELETE FROM tb_jemaat WHERE idJemaat = ?',
    [ idJemaat ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus data!", res)
        }
    });
};




