import React, { useState } from 'react';
import Title from './components/Title';
import ItemList from './components/ItemList';
import ItemInput from './components/ItemInput';

function App() {
  const initialState = [{ name: 'one', id: 0 }, { name: 'two', id: 1 }];
  const [items, updateItems] = useState(initialState);

  const removeItem = ({ id }) =>
    updateItems(items.filter(item => item.id !== id));

  const addItem = item =>
    updateItems([...items, { name: item, id: items.length }]);

  return (
    <div className="App">
      <Title title="Do things" />
      <ItemInput addItem={addItem} />
      <ItemList items={items} removeItem={removeItem} />
    </div>
  );
}

export default App;
