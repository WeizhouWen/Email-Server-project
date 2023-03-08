import React, { FC, useEffect, useState } from 'react';
import { useNavigate, Outlet } from "react-router-dom";

const App: FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUesr] = useState(null);

  useEffect(() => {
    navigate('/account');
    setLoading(false);
  }, []);

  return !loading ? <Outlet context={[user, setUesr]} /> : null;
};

export default App;