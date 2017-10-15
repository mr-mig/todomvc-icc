import todos from './reducers'
import {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted
} from './actions'

const empty = () => ({
  byId: {},
  byOrder: []
})

describe('todos reducer', () => {

  it('should handle initial state', () => {
    const result = todos(undefined, {})

    expect(result).toEqual({
      byId: {
        0: {
          text: 'Use ICCs!',
          completed: false
        }
      },
      byOrder: [0]
    })
  })

  it('should handle ADD_TODO', () => {
    const result = todos(empty(), addTodo('Run the tests'))

    expect(result).toEqual(
      {
        byId: {
          0: {
            text: 'Run the tests',
            completed: false,
            id: 0
          }
        },
        byOrder: [0]
      })
  })

  it('should handle DELETE_TODO', () => {
    const step1 = todos(empty(), addTodo('Run the tests'))
    const step2 = todos(step1, addTodo('Use Redux'))
    const result = todos(step2, deleteTodo(0))

    expect(result).toEqual({
      byId: {
        1: {
          text: 'Use Redux',
          completed: false,
          id: 1
        }
      },
      byOrder: [1]
    })
  })

  it('should handle EDIT_TODO', () => {
    const step1 = todos(empty(), addTodo('Run the tests'))
    const result = todos(step1, editTodo(0, 'Use Redux'))

    expect(result).toEqual({
      byId: {
        0: {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      },
      byOrder: [0]
    })
  })

  it('should handle COMPLETE_TODO', () => {
    const step1 = todos(empty(), addTodo('Run the tests'))
    const step2 = todos(step1, addTodo('Use Redux'))
    const result = todos(step2, completeTodo(1))

    expect(result).toEqual({
      byId: {
        0: {
          text: 'Run the tests',
          completed: false,
          id: 0
        },
        1: {
          text: 'Use Redux',
          completed: true,
          id: 1
        }
      },
      byOrder: [0, 1]
    })
  })

  it('should handle COMPLETE_ALL', () => {
    const step1 = todos(empty(), addTodo('Run the tests'))
    const step2 = todos(step1, addTodo('Use Redux'))
    const result = todos(step2, completeAll())

    expect(result).toEqual({
      byId: {
        0: {
          text: 'Run the tests',
          completed: true,
          id: 0
        },
        1: {
          text: 'Use Redux',
          completed: true,
          id: 1
        }
      },
      byOrder: [0, 1]
    })
  })

  it('should handle CLEAR_COMPLETED', () => {
    const step1 = todos(empty(), addTodo('Run the tests'))
    const step2 = todos(step1, addTodo('Use Redux'))
    const step3 = todos(step2, completeTodo(0))
    const result = todos(step3, clearCompleted())

    expect(result).toEqual({
      byId: {
        1: {
          text: 'Use Redux',
          completed: false,
          id: 1
        }
      },
      byOrder: [1]
    })
  })

  it('should not generate duplicate ids after CLEAR_COMPLETED', () => {
    const step1 = todos(empty(), addTodo('Run the tests'))
    const step2 = todos(step1, addTodo('Use Redux'))
    const step3 = todos(step2, completeTodo(0))
    const step4 = todos(step3, clearCompleted())
    const result = todos(step4, addTodo('Test'))

    expect(result).toEqual({
      byId: {
        1: {
          text: 'Use Redux',
          completed: false,
          id: 1
        },
        2: {
          text: 'Test',
          completed: false,
          id: 2
        }
      },
      byOrder: [1, 2]
    })
  })
})
