import React, { useState } from 'react';

// export default ({ addItem }) => (
//   <form
//     onSubmit={evt => {
//       evt.preventDefault();
//       addItem(evt.target.newItem.value);
//     }}>
//     <input name="newItem" type="text" />
//     <button type="submit">add</button>
//   </form>
// );

export default ({ addItem }) => {
  const [item, updateItem] = useState('');
  return (
    <>
      <input
        name="newItem"
        type="text"
        value={item}
        onChange={evt => updateItem(evt.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          addItem(item);
          updateItem('');
        }}>
        add
      </button>
    </>
  );
};
