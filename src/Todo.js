import {connect} from "react-redux";
import {addTodo, deleteTodo} from "./actions/todoAction";

function Todo(props) {
  return <div>
    <h1>TODO LIST</h1>
    <ul>
      {props.todos.map(todo => <li key={todo.id}>{todo.id} : {todo.text}</li>)}
    </ul>
  </div>
}


function mapStateToProps(state) {
  return {
    todos: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)