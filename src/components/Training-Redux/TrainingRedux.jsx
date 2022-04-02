import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerActiv } from "../../redux/training-reduce";
import classes from './TrainingRedux.module.css'

const TrainingRedux = (props) => {
  const dispatch = useDispatch();
  let cash = useSelector(state => state.trainingRedux.cash)
  let customers = useSelector(state => state.trainingRedux.customers)
  const Increment = (cash) => {
    //dispatch({ type: "ADD_CASH", payload: cash })
    dispatch(addCustomerActiv(cash))
  }
  const Decrement = (cash) => {
    dispatch({ type: "MINUS_CASH", payload: cash })
  }
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch({ type: "CUSTOMER", payload: customer })
  }
  const removeCustomer = (customer) => {

    dispatch({ type: "REMOVECUSTOMER", payload: customer.id })
  }


  return (
    <div>
      <h2>{cash}</h2>
      <button onClick={() => Increment(Number(prompt()))}>Increment</button>
      <button onClick={() => Decrement(Number(prompt()))} >Decrement</button>

      <button onClick={() => addCustomer(prompt())} >add customers</button>

      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          )}

        </div>

        : <div>customers absent</div>
      }

    </div>
  )


}

export default TrainingRedux

