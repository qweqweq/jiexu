import superagent from 'superagent';
import HOST from './env';

const request = {
    get: (data) => {
        return new Promise((resolve, reject) => {
            superagent
            .get(`${HOST}/graphql`)
            .query(data)
            .then((res) => {
                if (res.status === 200) {
                    resolve(res.body.data);
                }
                resolve(null);
            })
            .catch(e => {
                reject(e);
            });
        });
    },
    post: (url, data) => {
        return new Promise((resolve, reject) => {
            superagent
            .post(`${HOST}/${url}`)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send(JSON.stringify(data))
            .then((res) => {
                if (res.status === 200) {
                    resolve(res.body.data);
                }
                resolve(null);
            })
            .catch(e => {
                reject(e);
            });
        });
    }

};
export default request;
