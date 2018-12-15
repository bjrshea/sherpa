import React from 'react';
import { Link } from 'react-router-dom';

function UserCreds() {
  return(
  <div className="user-creds">
    <p><Link to="/sign-up"><span className="sign-up">Sign Up</span></Link> | <Link to="/sign-in"><span className="sign-in">Sign In</span></Link></p>
  </div>
  );
}

export default UserCreds;
