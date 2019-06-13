import React from 'react';

export default ({ items, removeItem }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        {item.name}{' '}
        <button type="button" onClick={() => removeItem(item)}>
          x
        </button>
      </li>
    ))}
  </ul>
);
