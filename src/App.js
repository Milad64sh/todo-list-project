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
    editInfo: false,
  };
  handleChange = (e) => {};
  handleDelete = (id) => {};
  handleSubmit = (e) => {};
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
