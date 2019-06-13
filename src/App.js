import React, { useState, useEffect } from 'react';
import fakeFetch from './util/fakeFetch';

import Title from './components/Title';
import ItemList from './components/ItemList';
import ItemInput from './components/ItemInput';
import WithWidth from './components/WithWidth';

function App() {
  const [items, updateItems] = useState([]);
  const [loading, updateLoading] = useState(true);

  const removeItem = ({ id }) =>
    updateItems(items.filter(item => item.id !== id));

  const addItem = item =>
    updateItems([...items, { name: item, id: Date.now() }]);

  useEffect(() => {
    fakeFetch().then(res => {
      updateItems(res.data);
      updateLoading(false);
    });
  }, []);

  return (
    <WithWidth
      className="App"
      style={{ padding: '3rem' }}
      render={width =>
        width > 900 ? (
          <>
            <Title title={`Things to do: ${items.length}`} />
            <ItemInput addItem={addItem} />
            {loading ? (
              <h3>...loading</h3>
            ) : (
              <ItemList items={items} removeItem={removeItem} />
            )}
          </>
        ) : (
          <p> make your browser wider to use this app</p>
        )
      }
    />
  );
}

export default App;
