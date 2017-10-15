import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem'
import Footer from '../Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../domains/ui/constants'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

export default class MainSection extends Component {
  static propTypes = {
    todoIds: PropTypes.array.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    completeAll: PropTypes.func.isRequired
  }

  state = { filter: SHOW_ALL }

  handleClearCompleted = () => {
    this.props.clearCompleted()
  }

  handleShow = filter => {
    this.setState({ filter })
  }

  renderToggleAll(completedCount) {
    const { todoIds, completeAll } = this.props
    if (todoIds.length > 0) {
      return (
        <span>
          <input className="toggle-all"
                 type="checkbox"
                 checked={completedCount === todoIds.length}
                 />
          <label onClick={completeAll}/>
        </span>
      )
    }
  }

  renderFooter(completedCount) {
    const { todoIds } = this.props
    const { filter } = this.state
    const activeCount = todoIds.length - completedCount

    if (todoIds.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted}
                onShow={this.handleShow} />
      )
    }
  }

  render() {
    const { todoIds } = this.props
    const { filter } = this.state

    const filteredTodos = todoIds.filter(TODO_FILTERS[filter])
    const completedCount = todoIds.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todoId =>
            <TodoItem key={ todoId } id={ todoId } />
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    )
  }
}
