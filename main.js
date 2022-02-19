const dotenv = require('dotenv');
const webpack = require('webpack');
const config = require('./webpack/webpack.config');
const path = require('path');

const productionModes = ['production', 'stage'];

(async () => {
    //load env variable
    dotenv.config({path: path.resolve('.env')});
    const isProduction = productionModes.includes(process.env.mode);
    const pathResolveFunc = (p) => path.resolve(__dirname, p);

    const compiler = webpack(config(isProduction, pathResolveFunc));

    await compiler.run(() => {})
})();
