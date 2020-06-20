const env = process.env.NODE_ENV;
const CUSTOM_HOST = {
    'develop': 'http://localhost:1337',
    'beta': 'http://admin.jiexuedu.com:8080',
    'production': 'http://admin.jiexuedu.com'
};
export default CUSTOM_HOST[env];
