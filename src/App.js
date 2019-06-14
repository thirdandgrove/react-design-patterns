import React from 'react';

import withTodos from './components/withTodos';
import Title from './components/Title';
import ItemList from './components/ItemList';
import ItemInput from './components/ItemInput';

function App(props) {
  return (
    <div className="App" style={{ padding: '3rem' }}>
      <Title title={`Things to do: ${props.items.length}`} />
      <ItemInput addItem={props.addItem} />
      {props.loading ? (
        <h3>...loading</h3>
      ) : (
        <ItemList items={props.items} removeItem={props.removeItem} />
      )}
    </div>
  );
}

export default withTodos(App);
