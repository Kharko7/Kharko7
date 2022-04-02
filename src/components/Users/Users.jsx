import * as axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import classes from './Users.module.css'
import userimg from './../../img/user-img.jpg'

const Users = (props) => {

  let [user, setUser] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(respond => respond.json())
      .then(data => setUser(data.slice(0, 5)))
  }, [])

  const getUserData = user.map(item => <ul className={classes.list} key={item.id} >
    <li><img src={userimg} alt="user" /></li>
    <li><span>Name</span> {item.name}</li>
    <li><span>User-Name</span>  {item.username}</li>
    <li><span>Website</span>  {item.website}</li>
    <li><span>City</span>  {item.address.city}</li>
  </ul>)

  return (
    <div>
      <button >Show users</button>
      {user.length !== 0 ? getUserData : ''}
    </div >
  )
}

export default Users


////////////////   Async Await  BUTTON//////////////////////////
// const showUser = async () => {
//   if (user.length === 0) {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     let jsonData = await response.json();
//     jsonData = setUser(jsonData);
//   }
// }

////////////////  useEffect  when you just render first time page //////////////////////////
// useEffect(async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   let jsonData = await response.json();
//   jsonData = await setUser(jsonData.slice(0, 5));
// }, [])

////////////   AXIOS CALLLL ////////////////////
// const showUser = (setUser) => {
//   axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(response => setUser(response.data))
// }