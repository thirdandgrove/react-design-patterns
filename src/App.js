import React from 'react';

import useList from './hooks/useList';

import Title from './components/Title';
import ItemList from './components/ItemList';
import ItemInput from './components/ItemInput';

function App() {
  const [items, loading, addItem, removeItem] = useList(['whoops'], false);
  console.log(items)
  return (
    <div className="App" style={{ padding: '3rem' }}>
      <Title title={`Things to do: ${items.length}`} />
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
