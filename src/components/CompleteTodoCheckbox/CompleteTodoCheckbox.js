import React from 'react'
import PropTypes from 'prop-types'

const CompleteTodoCheckbox = ({ todo, onClick }) =>
  <input className="toggle"
         type="checkbox"
         checked={ todo.completed }
         onChange={() => onClick(todo.id)}/>

CompleteTodoCheckbox.propTypes = {
  todo: PropTypes.object.isRequired,

  onClick: PropTypes.func.isRequired
}

export default CompleteTodoCheckbox

