import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem'
import Footer from '../Footer'

export default class MainSection extends Component {
  static propTypes = {
    todoIds: PropTypes.array.isRequired,
    completedCount: PropTypes.number.isRequired,

    onCompleteAllClick: PropTypes.func.isRequired
  }

  renderToggleAll(completedCount) {
    const { todoIds, onCompleteAllClick } = this.props
    if (todoIds.length > 0) {
      return (
        <span>
          <input className="toggle-all"
                 type="checkbox"
                 checked={completedCount === todoIds.length}
                 />
          <label onClick={onCompleteAllClick}/>
        </span>
      )
    }
  }

  render() {
    const { todoIds, completedCount } = this.props

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {todoIds.map(todoId =>
            <TodoItem key={ todoId } id={ todoId } />
          )}
        </ul>
        <Footer/>
      </section>
    )
  }
}
