// UserContext.js
import React, { createContext } from 'react';

const UserContext = createContext({
  login: "default user"
});

export default UserContext;
