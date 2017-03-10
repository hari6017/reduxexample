import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectuser} from '../actions/index';
export  class Userlist extends React.Component{
  createusers(){
    console.log(this.props.Users[0]);
    var x=this.props.Users.map((user)=>{

    return  <li key = {user.id} onClick = {()=>this.props.selectuser(user)}
    >{user.first} {user.last} </li>
  }
);

    return(
      <div>{x}
      </div>






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
    Countries : state.Country,
    Users : state.Users,

};
}
function MatchDispatchToProps(dispatch)
{
  return bindActionCreators({selectuser : selectuser}, dispatch);
}

export default connect(mapStateToProps, MatchDispatchToProps)(Userlist);
