const httpProxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        httpProxy('/api', {
            target: 'http://127.0.0.1:8000',
            ws: true
        })
    );
};