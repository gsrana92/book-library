import React from "react";
import { connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => {
  return (
    <div>
      <button onClick = {startLogin} >Login</button>
    </div>
  );
};

const mapDispatchToProps = () => {
    return{
        startLogin
    }
}
export default connect(undefined, mapDispatchToProps())(LoginPage);
