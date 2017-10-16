import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'

import Header from './Header'
import NewTodoInput from '../TodoInput/new'

const setup = () => {
  const props = {
    list : { title: 'todos', id: 0 },
    addTodo: jest.fn()
  }

  const renderer = createRenderer();
  renderer.render(<Header {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('Header', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('header')
      expect(output.props.className).toBe('header')

      const [ h1, input ] = output.props.children

      expect(h1.type).toBe('h1')
      expect(h1.props.children).toBe('todos')

      expect(input.type).toBe(NewTodoInput)
      expect(input.props.placeholder).toBe('What needs to be done?')
    })
  })
})
