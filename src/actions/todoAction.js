let count = 0

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: ++count,
    text: text
  }
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id: id
  }
}