import {COUNTER_INCREMENT,COUNTER_DECREMENT} from '../Actions/ActionTypes';

const initialstate={
count:0
}


export default CounterReducer=(state=initialstate,action)=>{
    switch(action.type){
        case COUNTER_INCREMENT:
        return {
            ...state,
            count:state.count+1
        }
        case COUNTER_DECREMENT:
        return {
            ...state,
            count:state.count-1
        }
        default:
        return state;
    }
}
