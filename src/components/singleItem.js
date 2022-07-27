import React, { Component } from 'react';

export default class singleItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className='single-item'>
        <h6>{title}</h6>
        <div className='item-icon'>
          <span className='edit-icon' onClick={handleEdit}>
            <i className='fas fa-pen'></i>
          </span>
          <span className='delete-icon' onClick={handleDelete}>
            <i className='fas fa-trash'></i>
          </span>
        </div>
      </li>
    );
  }
}
