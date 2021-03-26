import {connect} from "react-redux";

import {setAge, setName} from "./actions/userAction";

function User(props) {
  const clickSetName = () => {
    props.setName("tsukasa")
  }

  const clickSetAge = () => {
    props.setAge(30)
  }

  return <div className={"App"}>
    <p>name: {props.name}</p>
    <p>age: {props.age}</p>
    {/*<p><button onClick={() => props.setName("tsukasa")}>setName</button></p>*/}
    {/*<p><button onClick={() => props.setAge(22)}>setAge</button></p>*/}
    <p><button onClick={clickSetName}>setName</button></p>
    <p><button onClick={clickSetAge}>setAge</button></p>
  </div>
}

function mapStateToProps(state) {
  return {
    name: state.name,
    age: state.age
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAge: (age) => dispatch(setAge(age)),
    setName: (name) => dispatch(setName(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)