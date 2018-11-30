import {COUNTER_INCREMENT,COUNTER_DECREMENT} from './ActionTypes';
import {connect} from 'react-redux';
import CounterComponent from '../components/CounterComponent';

const mapStateToProps=(state)=>({
count:state.CounterReducer.count
})

const mapDispatchToProps=(dispatch)=>({
    increment:()=>dispatch({type:COUNTER_INCREMENT}),
    decrement:()=>dispatch({type:COUNTER_DECREMENT}),
    })

export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent);