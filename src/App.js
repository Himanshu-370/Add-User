import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/users/adduser";
import UsersList from "./components/users/usersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge }];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
