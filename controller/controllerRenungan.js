'use strict';
const response = require('../res/res');
const connection = require('../config/connection');

exports.tb_renungan = function (req, res) {
    connection.query('SELECT * FROM tb_renungan',
        function (data, rows, error) {
            if (data) {
                return res.json(response.error(500, "error"))
            } else {
                return res.json(response.success(rows))
            }
        });
};

exports.findByid = function (req, res) {
    var id = req.params.id;
    connection.query('SELECT * FROM tb_renungan where idRenungan = ?', [id],
        function (data, rows, error) {
            if (data) {
                return res.json(response.error(500, "error"))
            } else {
                return res.json(response.success(rows))
            }
        });
};

// exports.findRgnByTgl = function (req, res) {
//     var tgl = req.params.tgl;
//     connection.query('SELECT * FROM tb_renungan where tglRenungan = ?',
//         [tgl],
//         function (error, rows, fields) {
//             if (rows == null) {
//                 response.error(res, roww)

//             } else {
//                 response.ok(rows, res)

//             }
//         })
// };

exports.deleteRenungan = function (req, res) {
    var id = req.params.id;
    connection.query('DELETE FROM tb_renungan WHERE idRenungan = ?',
        [id],
        function (data, rows, error) {
            if (data) {
                return res.json(response.error(500, "error"))
            } else {
                return res.json(response.success(rows))
            }
        });
}

exports.createRenungan = function (req, res) {



    let tglRenungan = req.body.tglRenungan;
    let judulRenungan = req.body.judulRenungan;
    let contentRenungan = req.body.contentRenungan;
    let imgSlider = req.body.imgSlider;
    let imgContent = req.body.imgContent;

    connection.query('INSERT INTO tb_renungan (idRenungan, tglRenungan, judulRenungan, contentRenungan, imgSlider, imgContent) values (NULL,?,?,?,?,?)',
        [tglRenungan, judulRenungan, contentRenungan, imgSlider, imgContent],
        function (rows, error, data) {
            if (data) {
                return res.json(response.error(500, "error"))
            } else {
                return res.json(response.success(req.body))
            }
        });
};

exports.updateRenungan = function (req, res) {

    let idRenungan = req.body.idRenungan;
    let tglRenungan = req.body.tglRenungan;
    let judulRenungan = req.body.judulRenungan;
    let contentRenungan = req.body.contentRenungan;
    let imgSlider = req.body.imgSlider;
    let imgContent = req.body.imgContent;

    connection.query('UPDATE tb_renungan SET tglRenungan = ?, judulRenungan = ?, contentRenungan = ?, imgSlider = ?, imgContent = ? WHERE idRenungan = ?',

        [tglRenungan, judulRenungan, contentRenungan, imgSlider, imgContent, idRenungan],
        function (data, rows, error) {
            if (data) {
                return res.json(response.error(500, "error"))
            } else {
                return res.json(response.success(req.body))
            }
        });
};