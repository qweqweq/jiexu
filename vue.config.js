module.exports = {
    devServer: {
        disableHostCheck: true
    },
    productionSourceMap: process.env.NODE_ENV === 'beta',
    publicPath: process.env.NODE_ENV === 'beta' ? 'beta' : ''
};
