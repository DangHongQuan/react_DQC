import api from "./api";

const list = () => api.get(api.url.name).then((res) => res.data);
const get = (id) => api.get(`${api.url.name}/${id}`).then((res) => res.data);
const add = (data) => api.post(api.url.name, data).then((res) => res.data);
const update = (id, data) =>
  api.put(`${api.url.name}/${id}`, data).then((res) => res.data);
const remove = (id) =>
  api.delete(`${api.url.name}/${id}`).then((res) => res.data);

const nameProduct = {
  list,
  get,
  add,
  update,
  delete: remove,
};

export default nameProduct;
