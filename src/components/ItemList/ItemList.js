import React from 'react';

export default ({ items, removeItem }) => (
  <ul>
    {items.map(item => (
      <li key={item.name}>
        {item.name}{' '}
        <button type="button" onClick={() => removeItem(item)}>
          x
        </button>
      </li>
    ))}
  </ul>
);
