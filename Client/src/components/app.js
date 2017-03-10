import React from 'react';
import Userlist from '../containers/Userlist';
import Countries from '../containers/Countries';
import UserDetail from '../containers/Userdetails';
var App = ()=>(

  <div>
    <h1>User Details</h1>
    <Userlist />
    <Countries />
    <hr/>
    <h2>Users:</h2>
    <UserDetail />
  </div>
)


export default App;
