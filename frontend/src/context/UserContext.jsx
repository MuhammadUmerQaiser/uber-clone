import { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
  });
  return (
    <UserDataContext.Provider value={user}>
      <div>{children}</div>
    </UserDataContext.Provider>
  );
};

export default UserContext;
