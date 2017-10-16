import list from './reducers'
import {
  addToList,
  deleteFromList
} from './actions'

describe('list reducer', () => {

  it('should handle initial state', () => {
    const result = list(undefined, {})

    expect(result).toEqual({
      byId: {
        0: {
          id: 0,
          title: 'todos',
          tasks: [0]
        }
      },
      byOrder: [0]
    })
  })

  it('should add a todo to list', function () {
    const step1 = list(undefined, {})
    const result = list(step1, addToList({
      todoId: 1,
      listId: 0
    }))

    expect(result).toEqual({
      byId: {
        0: {
          id: 0,
          title: 'todos',
          tasks: [0, 1]
        }
      },
      byOrder: [0]
    })
  })


  it('should delete a todo from list', function () {
    const step1 = list(undefined, {})
    const step2 = list(step1, addToList({
      todoId: 1,
      listId: 0
    }))
    const result = list(step2, deleteFromList({
      todoId: 1,
      listId: 0
    }))

    expect(result).toEqual({
      byId: {
        0: {
          id: 0,
          title: 'todos',
          tasks: [0]
        }
      },
      byOrder: [0]
    })
  })
})
