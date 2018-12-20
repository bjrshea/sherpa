import React from 'react';
import UserCreds from './UserCreds';
import HomeButton from './HomeButton';

function Nav() {
  return(
  <div className="nav-bar">
    <HomeButton/>
    <UserCreds/>
  </div>
  );
}

export default Nav;
