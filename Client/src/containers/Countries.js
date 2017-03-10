import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export  class Countries extends React.Component{
  createusers(){
    console.log("hari");
    return(
      this.props.Users.map((user)=>{
      return  <li key = {user.id}>{user.city} {user.state}</li>
      }
    )
    );
  }
  render(){

    return(
    <div>
      {this.createusers()}
    </div>
    );
  }
}

function mapStateToProps(state)
{
  console.log("h"+state.Users[0].first);
  return{
    Users : state.Country
};
}

export default connect(mapStateToProps)(Countries);
