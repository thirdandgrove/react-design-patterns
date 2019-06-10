import React, { Component } from 'react';
import fakeFetch from './util/fakeFetch';

import Title from './components/Title';
import ItemList from './components/ItemList';
import ItemInput from './components/ItemInput';

class App extends Component {
  state = { items: [], loading: true };

  componentDidMount() {
    fakeFetch().then(res => {
      this.setState({
        items: res.data,
        loading: false
      });
    });
  }
  removeItem = ({ id }) =>
    this.setState({ items: this.state.items.filter(item => item.id !== id) });

  addItem = item =>
    this.setState({
      items: [...this.state.items, { name: item, id: Date.now() }]
    });

  render() {
    const { items } = this.state;
    return (
      <div className="App" style={{ padding: '3rem' }}>
        <Title title="Do things" />
        <ItemInput addItem={this.addItem} />
        {this.loading ? (
          <h3>...loading</h3>
        ) : (
          <ItemList items={items} removeItem={this.removeItem} />
        )}
      </div>
    );
  }
}

export default App;
