var path = require('path');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../..', '/lucas_duarte_esportes.html'));
    });
    app.get('/home', function (req, res) {
        res.sendFile(path.join(__dirname, '../..', '/lucas_duarte_esportes.html'));
    });
    app.get('/login', function (req, res) {
        res.sendFile(path.join(__dirname, '../..', '/form-login.html'));
    });
};