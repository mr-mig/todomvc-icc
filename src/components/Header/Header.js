import React, { Component } from 'react'
import NewTodoInput from '../TodoInput/new'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTodoInput onSave={this.handleSave}
                      placeholder="What needs to be done?" />
      </header>
    )
  }
}
