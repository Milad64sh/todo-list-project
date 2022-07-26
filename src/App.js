import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './components/List';
import Input from './components/Input';
import './App.css';

export default class App extends Component {
  state = {
    items: [],
    item: '',
    id: uuidv4(),
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const newItems = [...this.state.items, newItem];
    this.setState({
      id: uuidv4(),
      items: newItems,
      item: '',
      editItem: false,
    });
  };
  handleDelete = (id) => {};
  handleEdit = (id) => {};
  clearList = () => {};
  render() {
    return (
      <section className='whole-app'>
        <Input
          handleChange={this.handleChange}
          handlesubmit={this.handleSubmit}
          handleEdit={this.handleEdit}
          item={this.state.item}
        />
        <List
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          item={this.state.items}
        />
      </section>
    );
  }
}
