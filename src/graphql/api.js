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

export const getLinks = () => {
  let data = {
    query: `query {
      pageFooters {
       icon
        to
        text
        subTitle
      }
    }`
  };
  return request(data);
};

export const getTeachers = () => {
  let data = {
    query: `query{
      teachers{
        name
        title
        text
        desc
        avator{url}
      }
    }`
  };
  return request(data);
};


export const getSchools = () => {
  let data = {
    query: `query{
      schools{
        title
        bgImage { url }
        desc
        icon {url}
        schoolName
        schoolText
      }
    }`
  }
  return request(data);
}

export const getSchoolDetails = () => {
  let data = {
    query: `query{
      schoolDetails{
        headerImg {
          url
        }
        title
        desc
        projects {
          secondTitle
          secondImg { url }
          secondDesc
        }
      }
    }`
  };
  return request(data);
};

export const getActives = () => {
  let data = {
    query: `query{
      actives{
        id
        title
        imgUrl{url}
        header
        desc
        subDesc
      }
    }`
  };
  return request(data);
};

export const getBanners = () => {
  let data = {
    query: `query{
      banners{
        id
        imgLink{url}
      }
    }`
  };
  return request(data);
};
