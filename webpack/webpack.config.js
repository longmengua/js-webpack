const dev = require('./dev');
const prod = require('./prod');

module.exports = (isProduction, pathResolveFunc) => isProduction ? prod(pathResolveFunc) : dev(pathResolveFunc);