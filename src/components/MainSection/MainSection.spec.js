import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import MainSection from './MainSection'
import TodoItem from '../TodoItem'
import Footer from '../Footer'

const setup = propOverrides => {
  const props = Object.assign({
    id: 0,
    todoIds: [0, 1],
    completedCount: 0,

    onCompleteAllClick: jest.fn()
  }, propOverrides)

  const renderer = createRenderer()
  renderer.render(<MainSection {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('MainSection', () => {
    it('should render container', () => {
      const { output } = setup()
      expect(output.type).toBe('section')
      expect(output.props.className).toBe('main')
    })

    describe('toggle all input', () => {
      it('should render', () => {
        const { output } = setup()
        const [ toggle ] = output.props.children[0].props.children
        expect(toggle.type).toBe('input')
        expect(toggle.props.type).toBe('checkbox')
        expect(toggle.props.checked).toBe(false)
      })

    })

    describe('footer', () => {
      it('should render', () => {
        const { output } = setup()
        const [ , , footer ] = output.props.children
        expect(footer.type).toBe(Footer)
      })
    })

    describe('todo list', () => {
      it('should render', () => {
        const { output, props } = setup()
        const [ , list ] = output.props.children
        expect(list.type).toBe('ul')
        expect(list.props.children.length).toBe(2)
        list.props.children.forEach((item, i) => {
          expect(item.type).toBe(TodoItem)
        })
      })
    })
  })
})
