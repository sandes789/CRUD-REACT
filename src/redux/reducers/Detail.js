import {
    ADD_USERS,
    DEL_USERS,
    EDIT_USERS,
    API_CALL
} from '../actions/types'

const initialState =  {
    userDetail : []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case ADD_USERS:
            return{
                ...state,
                userDetail:[...state.userDetail, action.payload]
            }
        
          case DEL_USERS:
            return{
              ...state,
              userDetail: state.userDetail.filter(list => list.id !== action.payload)

            }

            case EDIT_USERS:
            return {
                ...state,
                userDetail: state.userDetail.map( user => {
                  if(user.id === action.payload.id){
                    user.name = action.payload.name
                    user.phone = action.payload.phone
                    user.email = action.payload.email
                  }
                  return user
                })
            }
            case API_CALL:
              return{
                ...state,
                userDetail:[...state.userDetail,...action.payload]

              }
        default:
            return state
    }
}