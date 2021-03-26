import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {increment, decrement} from "./actions/counterAction";


function App(props) {
  return (
    <div className="App">
      <p>clicked: {props.count}</p>
      <button onClick={() => props.increment()}>プラス</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state
  }
}


// function mapDispatchToProps(dispatch) {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    increment: function () {return dispatch(increment())},
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;
