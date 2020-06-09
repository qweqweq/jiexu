import superagent from 'superagent';

let data = {
    query: `query {
        channels {
            id
            name
            desc
            imgUrl { url }
            applyUrl
            linkUrl
        }
      }`
  };

const getChannels = () => {
    return new Promise((resolve, reject) => {
        superagent
        .get('http://localhost:1337/graphql')
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
};
export default getChannels;
