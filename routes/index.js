'use strict';

module.exports = function (app) {


    let dataKKA = require('../controller/controllerKKA');
    let dataJemaat = require('../controller/controllerJemaat');
    let dataLaporan = require('../controller/controllerLaporan');
    let dataNextWeek = require('../controller/controllerNextWeek');
    let dataRenungan = require('../controller/controllerRenungan');

    app.route('/')
        .get(dataKKA.index);

    //route KKA

    app.route('/tb_kkas')
        .get(dataKKA.tb_kkas);

    app.route('/tb_kkas/:id')
        .get(dataKKA.findKKA);

    app.route('/tb_kkas')
        .post(dataKKA.createKKA);

    app.route('/tb_kkas')
        .put(dataKKA.updateKKA);

    app.route('/tb_kkas')
        .delete(dataKKA.deleteKKA);

    //route Jemaat

    app.route('/tb_jemaat')
        .get(dataJemaat.tb_jemaat);

    app.route('/tb_jemaat/:id')
        .get(dataJemaat.findJemaat);

    app.route('/tb_jemaat')
        .post(dataJemaat.createJemaat);

    app.route('/tb_jemaat')
        .put(dataJemaat.updateJemaat);

    app.route('/tb_jemaat')
        .delete(dataJemaat.deleteJemaat);


    //route Renungan

    app.route('/renungan')
        .get(dataRenungan.tb_renungan);

    app.route('/renungan/:id')
        .get(dataRenungan.findByid);

    app.route('/renungan/:id')
        .delete(dataRenungan.deleteRenungan)

    app.route('/renungan')
        .post(dataRenungan.createRenungan)

    app.route('/renungan')
        .put(dataRenungan.updateRenungan)


    // app.route('/tb_laporan')
    //     .get(dataLaporan.tb_laporan);

    //  //route Jemaat

    // app.route('/tb_nextweek')
    //     .get(dataNextWeek.tb_nextweek);
};