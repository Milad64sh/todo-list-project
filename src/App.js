import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from './components/Input';
import List from './components/List';
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
      id: uuidv4(),
      title: this.state.item,
    };
    const newItems = [...this.state.items, newItem];
    this.setState({
      items: newItems,
      item: '',
      id: uuidv4(),
      editItem: false,
    });
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };
  render() {
    return (
      <>
        <Input
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
        />
        <List
          items={this.state.items}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          clearList={this.clearList}
        />
      </>
    );
  }
}
