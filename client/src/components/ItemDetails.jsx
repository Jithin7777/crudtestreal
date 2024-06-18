import React from 'react';
import { deleteItem } from '../services/itemService';

const ItemDetails = ({ item, fetchItems }) => {
  if (!item) return <div>Select an item to see details</div>;

  const handleDelete = async () => {
    await deleteItem(item._id);
    fetchItems();
  };

  return (
    <div>
      <h2>Item Details</h2>
      <p>Name: {item.name}</p>
      <p>Description: {item.description}</p>
      <p>Price: ${item.price}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ItemDetails;

