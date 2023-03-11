import React, { FC } from 'react';
import { Popover, Layout } from 'antd';
import { useOutletContext, useNavigate } from 'react-router-dom';

const { Header } = Layout;

interface Props {
  setUser: any,
}

const LayoutHeader: FC<Props> = ({setUser}) => {
  const navigate = useNavigate();
  const [user] = useOutletContext<any>();

  const logoutFnc = async () => {
    setUser(null);
    navigate('/account');
  }

  return (
    <Header className="header">
      <div className="header-title">Student Mail</div>
      
      <Popover
        overlayClassName="user-menu-pop"
        content={<div className="logout-btn" onClick={logoutFnc}>Sign Out</div>} 
        trigger="hover" 
        placement="bottomRight"
      >
        <div className="icon-container">
          <span>{user.userEmailAddress}</span>
        </div>
      </Popover>
    </Header>
  );
}

export default LayoutHeader;