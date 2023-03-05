import React, { FC } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

const MailBox: FC = () => {
  const context = useOutletContext();

  return (
    <Outlet context={context}/>
  )
}

export default MailBox;