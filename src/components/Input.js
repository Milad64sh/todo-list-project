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
          {/* <div className='checkbox'>
            <input type='checkbox' />
            <label className='checks label'>done</label>
            <input type='checkbox' />
            <label className='checks label'>undone</label>
          </div> */}
          <button className='btn add-btn' type='submit'>
            add
          </button>
        </form>
      </fieldset>
    );
  }
}
