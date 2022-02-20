const dotenv = require('dotenv');
const webpack = require('webpack');
const path = require('path');

const productionModes = ['prod', 'stage'];

(async () => {
    //load env variable
    dotenv.config({path: path.resolve('.env')});
    const isProduction = productionModes.includes(process.env.mode);

    // load webpack config
    const config = isProduction ? require('./webpack/prod') : require('./webpack/dev')

    // console.log(config)
    const compiler = webpack(config);

    await compiler.run((err, stats) => {
        if(err){
            console.error(err)
            return
        }
        if(!stats?.compilation) return
        if(stats?.compilation.errors){
            console.error(stats?.compilation.errors)
            return
        }
    })
})();
