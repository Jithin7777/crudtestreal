import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  const fetchItems = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>MERN CRUD App</h1>
      <ItemForm item={selectedItem} fetchItems={fetchItems} />
      <ItemList selectItem={selectItem} refresh={refresh} />
      <ItemDetails item={selectedItem} fetchItems={fetchItems} />
    </div>
  );
};

export default App;


