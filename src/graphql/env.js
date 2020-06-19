const env = process.env.NODE_ENV;
const CUSTOM_HOST = {
    'develop': 'http://localhost:1337',
    'beta': 'http://139.219.137.131:8080',
    'production': 'http://www.jiexu.com'
};
export default CUSTOM_HOST[env];
