import React, { Component } from 'react';
import '../App.css';

export default class Input extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <fieldset>
        <legend>
          <h1>todo input</h1>
        </legend>
        <form onSubmit={handleSubmit}>
          <label className='todo label'>your todo item: </label>
          <div className='input'>
            <i className='fas fa-book'></i>
            <input
              type='text'
              placeholder='...add todo item here'
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            disabled={item ? false : true}
            className={editItem ? 'btn edit-btn' : 'btn add-btn'}
            type='submit'
          >
            {editItem ? 'Edit' : 'add'}
          </button>
        </form>
      </fieldset>
    );
  }
}
