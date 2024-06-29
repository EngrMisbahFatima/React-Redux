import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'


export default function Shop() {
  const dispatch = useDispatch();
  const {depositAmount, withdrawAmount} = bindActionCreators(actionCreators, dispatch)
  return (
    <div className='d-flex align-items-center m-3'>
       <button type="button" className="btn btn-primary mx-2" onClick={()=>{depositAmount(100)}}>+</button>
        Bank Amount
        <button type="button" className="btn btn-danger mx-2" onClick={()=>{withdrawAmount(100)}}>-</button>
    </div>
  )
}
