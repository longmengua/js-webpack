module.exports = (pathResolveFunc) => ({
    mode: "production",
    entry: {
        index: pathResolveFunc('src/index.tsx')
    },
    output: {
        path: pathResolveFunc('build'),
        filename: '[name].[contenthash: 8].js',
    }
});
