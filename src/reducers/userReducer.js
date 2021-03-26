const initUser = {
  name: "default",
  age: 0
}

function userRouter(state = initUser, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.name}
    case 'SET_AGE':
      return {...state, age: action.age}
    default:
      return state
  }
}

export default userRouter;