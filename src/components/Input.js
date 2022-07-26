import React, { Component } from 'react';
import '../App.css';

export default class Input extends Component {
  render() {
    const { handleChange, hnadleSubmit, item } = this.props;
    return (
      <article className='inputs'>
        <div className='form'>
          <form onSubmit={hnadleSubmit}>
            <div className='input'>
              <input
                className='todo-input'
                type='text'
                placeholder='... add todo item here'
                value={item}
                onChange={handleChange}
              />
              <i className='fas fa-book'></i>
            </div>

            <div className='btn'>
              <button type='button' className='add-btn'>
                Add
              </button>
            </div>
          </form>
        </div>
      </article>
    );
  }
}
