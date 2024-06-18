import React, { useEffect, useState } from 'react';
import { fetchItems } from '../services/itemService';

const ItemList = ({ selectItem, refresh }) => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const response = await fetchItems();
    setItems(response.data);
  };

  useEffect(() => {
    getItems();
  }, [refresh]);

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id} onClick={() => selectItem(item)}>
            {item.name} - {item.description} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

