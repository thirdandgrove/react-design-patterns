import React, { Component } from 'react';
import Title from './components/Title';
import ItemList from './components/ItemList';
import ItemInput from './components/ItemInput';

class App extends Component {
  state = { items: [], loading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        items: [{ name: 'one', id: '1873312' }, { name: 'two', id: '1231234' }],
        loading: false
      });
    }, 1500);
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
