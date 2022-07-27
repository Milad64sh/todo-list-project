import React, { Component } from 'react';
import Item from './SingleItem';

export default class List extends Component {
  render() {
    const { items, handleEdit, handleDelete, clearList, editItem } = this.props;
    return (
      <fieldset>
        <legend>
          <h1>todo list</h1>
        </legend>
        <ul>
          {items.map((item) => {
            return (
              <Item
                key={item.id}
                title={item.title}
                handleEdit={() => handleEdit(item.id)}
                handleDelete={() => handleDelete(item.id)}
              />
            );
          })}
          <button type='button' className=' btn clear-btn' onClick={clearList}>
            clear list
          </button>
        </ul>
      </fieldset>
    );
  }
}
