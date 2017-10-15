import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewTodoInput from '../TodoInput/new'

export default class Header extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <header className="header">
        <h1>{ this.props.title }</h1>
        <NewTodoInput onSave={this.handleSave}
                      placeholder="What needs to be done?" />
      </header>
    )
  }
}
