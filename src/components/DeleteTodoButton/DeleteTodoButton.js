import React from 'react'
import PropTypes from 'prop-types'

const DeleteTodoButton = ({ todo, onClick }) =>
  <button className="destroy"
          onClick={() => onClick(todo.id)} />

DeleteTodoButton.propTypes = {
  todo: PropTypes.object.isRequired,
  
  onClick: PropTypes.func.isRequired
}

export default DeleteTodoButton
