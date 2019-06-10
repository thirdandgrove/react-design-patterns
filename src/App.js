import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import ItemList from './components/ItemList';
import ItemInput from './components/ItemInput';

function App() {
  const [items, updateItems] = useState([]);
  const [loading, updateLoading] = useState(true);

  const removeItem = ({ id }) =>
    updateItems(items.filter(item => item.id !== id));

  const addItem = item =>
    updateItems([...items, { name: item, id: Date.now() }]);

  useEffect(() => {
    setTimeout(() => {
      updateItems([
        { name: 'one', id: '1873312' },
        { name: 'two', id: '1231234' }
      ]);
      updateLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App" style={{ padding: '3rem' }}>
      <Title title="Do things" />
      <ItemInput addItem={addItem} />
      {loading ? (
        <h3>...loading</h3>
      ) : (
        <ItemList items={items} removeItem={removeItem} />
      )}
    </div>
  );
}

export default App;
