const BASE_URL = 'http://172.25.74.144:3000/api/v1';

const serialize = function(obj) {
  var str = [],
    p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = p,
        v = obj[p];
      str.push(
        v !== null && typeof v === 'object'
          ? serialize(v, k)
          : encodeURIComponent(k) + '=' + encodeURIComponent(v)
      );
    }
  }
  return str.join('&');
};

export const rest = (jwt) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwt}`
  };

  const post = (path, params) => {
    return fetch(BASE_URL + path, {
      headers,
      method: 'POST',
      body: JSON.stringify(params)
    }).then((res) => res.json());
  };

  const get = (path, params) => {
    return fetch(BASE_URL + path + '?' + encodeURI(params), {
      headers,
      method: 'GET'
    }).then((res) => res.json());
  };

  const patch = (path, params) => {
    return fetch(BASE_URL + path, {
      headers,
      method: 'PATCH',
      body: JSON.stringify(params)
    }).then((res) => res.json());
  };

  const destroy = (path, params) => {
    return fetch(BASE_URL + path + '?' + encodeURI(params), {
      headers,
      method: 'DELETE'
    }).then((res) => res.json());
  };

  return { post, get, patch, destroy };
};
