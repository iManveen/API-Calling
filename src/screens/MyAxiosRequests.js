import axios from 'axios';

// GET request
export const myAxiosGetRequest = async () => {
  const res = await axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
  });
  return res;
};

// POST request
export const myAxiosPostRequest = async (data) => {
  const res = await axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: data,
  });
  return res;
};

// PUT request
export const myAxiosPutRequest = async (id, data) => {
  const res = await axios({
    method: 'put',
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    data: data,
  });
  return res;
};

// PATCH request
export const myAxiosPatchRequest = async (id, data) => {
  const res = await axios({
    method: 'patch',
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    data: data,
  });
  return res;
};

// DELETE request
export const myAxiosDeleteRequest = async (id) => {
  const res = await axios({
    method: 'delete',
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
  });
  return res;
};
