import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import EditTodoInput from '../TodoInput/edit'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    leftComponent: PropTypes.object,
    rightComponent: PropTypes.object
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    this.setState({ editing: false })
  }

  render() {
    const { todo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <EditTodoInput id={ todo.id }
                       text={todo.text}
                       editing={this.state.editing}
                       onSave={ this.handleSave }/>
      )
    } else {
      element = (
        <div className="view">

          { this.props.leftComponent && this.props.leftComponent(todo) }

          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>

          { this.props.rightComponent && this.props.rightComponent(todo) }

        </div>
      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}
