import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAg,uCol) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAg,college:uCol ,id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;