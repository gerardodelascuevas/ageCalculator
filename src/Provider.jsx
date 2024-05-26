import React, { useState } from 'react';
import MyContext from './Context';

const MyProvider = ({ children }) => {
  const [value, setValue] = useState('');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
