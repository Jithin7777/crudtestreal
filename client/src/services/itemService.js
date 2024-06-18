import axios from "axios";

const API_URL = "http://localhost:7003";

export const fetchItems = async () => {
  return await axios.get(`${API_URL}/getitems`);
};

export const fetchitemsById = async (id) => {
  return await axios.get(`${API_URL}/getoneitem/${id}`);
};

export const createItem = async (item) => {
  return await axios.post(`${API_URL}/items`, item);
};

export const updateItem = async (id, item) => {
  return await axios.put(`${API_URL}/updateitem/${id}`, item);
};


export const deleteItem=async(id)=>{
return await axios.delete(`${API_URL}/deleteitem/${id}`)
}