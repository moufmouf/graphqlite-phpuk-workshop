const axios = require('axios');

module.exports = function request(url, data, options) {
  /*console.log("BEFORE", options);
  if (options == 0) {
    options = {};
  }
  options.headers = {
      'Access-Control-Allow-Origin': '*',
    };

  options.withCredentials = true;
  console.log("AFTER", options);*/
  return axios.post(url, data, options);
  /*return axios.post(url, data, {
    headers: {'Access-Control-Allow-Origin': '*'},
    withCredentials: true,
  });*/
};
