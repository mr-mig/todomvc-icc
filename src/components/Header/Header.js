import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewTodoInput from '../TodoInput/new'

export default class Header extends Component {

  static propTypes = {
    list: PropTypes.object.isRequired
  }

  render() {
    return (
      <header className="header">
        <h1>{ this.props.list.title }</h1>
        <NewTodoInput listId={ this.props.list.id }
                      placeholder="What needs to be done?" />
      </header>
    )
  }
}
