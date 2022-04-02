const ADD_CASH = "ADD_CASH"
const MINUS_CASH = "MINUS_CASH"
const CUSTOMER = "CUSTOMER"
const REMOVECUSTOMER = "REMOVECUSTOMER"


let initialState = {

  customers: [],
  cash: 0,

}
console.log([...initialState.customers])
const trainingRedux = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload }
    case MINUS_CASH:
      return { ...state, cash: state.cash - action.payload }
    case CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] }
    case REMOVECUSTOMER:
        return {...state, customers: state.customers
          .filter(customer => customer.id !== action.payload)}
    default:
      return state
  }
}

export const addCustomerActiv = (payload) => ({type: ADD_CASH, payload})

export default trainingRedux