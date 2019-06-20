module.exports = {
    target: 'http://127.0.0.1:8000',
    ws: true,
    pathRewrite: {
        '^/api': '/'
    }
};