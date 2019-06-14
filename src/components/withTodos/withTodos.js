import React, { Component } from 'react';
import fakeFetch from '../../util/fakeFetch';

export default WrappedComponent => {
  return class extends Component {
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
      const { items, loading } = this.state;
      return (
        <WrappedComponent
          removeItem={this.removeItem}
          addItem={this.addItem}
          items={items}
          loading={loading}
        />
      );
    }
  };
};
