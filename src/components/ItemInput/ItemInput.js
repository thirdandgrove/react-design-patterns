import React from 'react';

export default ({ addItem }) => (
  <form
    onSubmit={evt => {
      evt.preventDefault();
      addItem(evt.target.newItem.value);
    }}>
    <input name="newItem" type="text" />
    <button type="submit">add</button>
  </form>
);
