// import React, { useState, useEffect } from 'react';
// import { createItem, updateItem } from '../services/itemService';

// const ItemForm = ({ item, fetchItems }) => {
//   const [formItem, setFormItem] = useState({ name: '', description: '', price: '' });

//   useEffect(() => {
//     if (item) {
//       setFormItem(item);
//     }
//   }, [item]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormItem((prevItem) => ({ ...prevItem, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formItem._id) {
//       await updateItem(formItem._id, formItem);
//     } else {
//       await createItem(formItem);
//     }
//     setFormItem({ name: '', description: '', price: '' });
//     fetchItems();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" value={formItem.name} onChange={handleChange} placeholder="Name" />
//       <input name="description" value={formItem.description} onChange={handleChange} placeholder="Description" />
//       <input name="price" value={formItem.price} onChange={handleChange} placeholder="Price" />
//       <button type="submit">{formItem._id ? 'Update' : 'Add'} Item</button>
//     </form>
//   );
// };

// export default ItemForm;

import React, { useEffect, useState } from "react";
import { createItem, updateItem } from "../services/itemService";

const ItemForm = ({ item, fetchItems }) => {
  const [formitem, setformitem] = useState({
    name: "",
    description: "",
    price: ""
  });

const handleChange =(e)=>{
    const {name,value}=e.target;
    setformitem((previtem)=>({...previtem,[name]:value}))
}

useEffect(()=>{
if(item){
    setformitem(item)
}
},[item])

const handleSubmit=async(e)=>{
e.preventDefault();
if(formitem._id){
    await updateItem(formitem._id,formitem)
}else{
    await createItem(formitem);
    alert('item added successfullly')
}
setformitem({name:'',description:'',price:''})
fetchItems()
}

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input value={formitem.name} onChange={handleChange} name="name" placeholder="Name" />
        <input
        value={formitem.description}
          onChange={handleChange}
          name="description"
          placeholder="Description"
        />
        <input value={formitem.price} onChange={handleChange} name="price" placeholder="Price" />
        <button type="submit">{formitem._id?'update':'add'}item</button>
      </form>
    </div>
  );
};

export default ItemForm;
