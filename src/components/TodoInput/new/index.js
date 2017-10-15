import React from 'react'
import connect from './connector'
import TodoInput from '../TodoInput'

const NewTodoInput = (props) => <TodoInput newTodo { ...props }/>

export default connect(NewTodoInput)
