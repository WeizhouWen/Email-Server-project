import React, { FC, useEffect, useState } from 'react';
import { useNavigate, Outlet } from "react-router-dom";

// import { useUser } from './UserProvider';

const App: FC = () => {
  const navigate = useNavigate();
  // const { getUserInfo } = useUser();
  const [loading, setLoading] = useState(true);
  const [user, setUesr] = useState(null);

  useEffect(() => {
    navigate('/account');
    setLoading(false);
  }, []);

  return !loading ? <Outlet context={[user, setUesr]} /> : null;
};

export default App;