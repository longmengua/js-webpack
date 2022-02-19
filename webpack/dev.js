module.exports = (pathResolveFunc) => ({
    mode: "development",
    entry: {
        index: pathResolveFunc('src/index.tsx')
    },
    output: {
        path: pathResolveFunc('build'),
        filename: '[name].[contenthash: 8].js',
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
});
