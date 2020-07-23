export const initialList = {

 todo : [
    {
        chore: 'Learn about reducers',
        id: 1,
        completed: false
      },
      {
        chore: 'Practice reducers',
        id: 2,
        finised: false
      },
      {
        chore: 'Complete reducer project',
        id: 3,
        finised: false
      },
      {
        chore: 'Practice more reducers',
        id: 4,
        finised: false
      },
      {
        chore: 'Become proficient at reducers',
        id: 5,
        finised: false
      }
  ]
}
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD _TASK':
            console.log("action.payload", action)
            return {
                ...state, 
                todo: [...state.todo,
                {
                    chore: action.payload,
                    id:Date.now(),
                    completed: false
                }]
            }
            case 'CLEAR_ALL':
                return{
                    ...state, 
                    todo: state.todo.filter(item => !item.completed)
                }
            case 'TOGGLE_IT':
                return{
                    ...state,
                    todo:state.todo.map(item => {
                        if(action.payload === item.id){
                            return{
                                ...item, 
                                completed: !item.completed
                            }
                        }
                        return{
                            ...item
                        }
                    })
                }

                default:
                    return state;
    }
}