import { useState, useEffect } from 'react';
import fakeFetch from '../util/fakeFetch';

export default (defaultState = [], initialLoading = true) => {

  if (!Array.isArray(defaultState)) {
    throw new Error('Default state must be an array')
  }

  const [items, updateItems] = useState(defaultState);
  const [loading, updateLoading] = useState(initialLoading);

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

  return [items, loading, addItem, removeItem];
};
