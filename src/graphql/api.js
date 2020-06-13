import request from './request';

export const getHomePage = () => {
  let data = {
    query: `query {
      homePageProjects {
        title
        name
        desc
      }
    }`
  };
  return request(data);
};

export const getChannels = () => {
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
  return request(data);
};

export const getProjects = () => {
  let data = {
    query: `query {
            projects {
              title
              header
              headImg {
                url
                name
              }
              text
              secondTitle
              backImg{
                  url
                  name
              }
              schools {
                name
                url
              }
            }
          }
        `
  };
  return request(data);
};

export const getFooter = () => {
  let data = {
    query: `query {
      pageFooters {
       icon
        to
        text
      }
    }`
  };
  return request(data);
};
