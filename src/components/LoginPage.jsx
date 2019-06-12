import React from 'react';

const LoginPage = (props) => {
  return (
    <div className="page login">
      <button onClick={props.login}>Log In</button>
    </div>
  );
}

export default LoginPage;