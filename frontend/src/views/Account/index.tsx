import './index.scss';
import React, { FC } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

const Account: FC = () => {
  const context = useOutletContext();

  return (
    <div className="account-container">
      <div className="account-circle">
        <div className="account-form">
          <Outlet context={context}/>
        </div>
      </div>
    </div>
  )
}

export default Account;