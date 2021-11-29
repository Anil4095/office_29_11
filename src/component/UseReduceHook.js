import React, { useReducer } from 'react'
import '../App.css';

const initialState=0;

const reducer=(state, action)=>{
    console.log(state, action)
    if(action.type==="INCREAMENT"){
        return state+1
    }
    if(action.type==="DECREAMENT"){
        return state-1
    }
    return state;
}

const UseReduceHook=()=> {

    const [state, dispatch]=useReducer(reducer, initialState)



    return (
        <>
        <div className="main-div">
            <p className="p-div">{state}</p>
            <div >
            <button className="btn-div" onClick={()=>dispatch({type:"INCREAMENT"})}>INC+</button>
            <button className="btn-div2" onClick={()=>dispatch({type:"DECREAMENT"})}>DEC+</button>
            </div>
        </div>
        </>
    )
}

export default UseReduceHook
