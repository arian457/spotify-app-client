import axios from "axios";

const base_server_path = process.env.NEXT_PUBLIC_URL_API;

const getService = async (path, body) => {
  const response = await axios.get(`${base_server_path}${path}`, {params:body});
  return response;
};

const postService = async (path, body, token) => {

  const response = await axios.post(`${base_server_path}${path}`, body, {
    headers: {
      "Authorization":`Bearer ${token}`
    }
  });
  return response;
};

const deleteService = async (path, body) => {
  const response = await axios.delete(`${base_server_path}${path}`, body);
  return response;
};

const updateService = async (path, body) => {
  const response = await axios.put(`${base_server_path}${path}`, body, {
    headers: {
      "Content-Type":  "application/json",
    },
  });
  return response.data;
};

const putService = async (path, body) => {
  const response = await axios.put(`${base_server_path}${path}`, body);
  return response;
};

export { getService, postService, putService, deleteService, updateService };
