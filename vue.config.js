module.exports = {
    devServer: {
        disableHostCheck: true
    },
    productionSourceMap: process.env.NODE_ENV === 'beta' ? true : false,
    publicPath: process.env.NODE_ENV === 'beta' ? 'beta' : ''
};
