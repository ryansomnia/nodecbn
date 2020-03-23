'use strict';
const response = require('../res/res');
const connection = require('../config/connection');

exports.tb_kkas = function(req, res) {
    connection.query('SELECT * FROM tb_kkas',
     function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findKKA = function(req, res) {
    
    var id = req.params.id;

    connection.query('SELECT * FROM tb_kkas where idKKA = ?',
    [ id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
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
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan data KKA", res)
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
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah data!", res)
        }
    });
};

exports.deleteKKA = function(req, res) {
    
    var idKKA = req.body.idKKA;

    connection.query('DELETE FROM tb_kkas WHERE idKKA = ?',
    [ idKKA ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus data!", res)
        }
    });
 };





exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};