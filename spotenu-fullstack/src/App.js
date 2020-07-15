import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import firebase from "firebase";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await firebase
        .firestore()
        .collection('users')
        .get();

      const usersList = querySnapshot.docs.map((doc) => {
        return doc.data();
      });
      setUsers(usersList);
    };
    getUsers();
  }, []);

  console.log(users)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TESTE DEPLOY SPOTENU</p>
        {users.map((user) => {
          return (
            <div>
              <p>{user.name}</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
