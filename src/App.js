import React from "react";
import { useState } from "react";
import './App.css';
import contactsDB from './contacts.json'

function App() {

  let fiveContacts = contactsDB.slice(0, 5)
  const [contacts, updateContacts] = useState(fiveContacts)

  const randomContact = () => {
    let randomIndex = Math.floor(Math.random() * contactsDB.length);
    let randomContact = contactsDB[randomIndex];
    console.log(randomContact)

    updateContacts([randomContact, ...contacts]);
  };

  return (
    <div className="App">
      <h1>Ironcontacts</h1>
      <button onClick={randomContact} >Add Random Contact</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                <img src={contact.pictureUrl} alt='actor' style={{width: '60px'}}/>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  {contact.wonOscar ? <p>🏆</p>: null}
                </td>
                <td>
                  {contact.wonEmmy ? <p>🏆</p>: null}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
