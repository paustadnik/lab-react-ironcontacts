import React from "react";
import { useState } from "react";
import './App.css';
import contactsDB from './contacts.json'

function App() {

  let fiveContacts = contactsDB.slice(0, 5)
  const [contacts, setContacts] = useState(fiveContacts)

  const randomContact = () => {
    let randomIndex = Math.floor(Math.random() * contactsDB.length);
    let randomContact = contactsDB[randomIndex];

    setContacts([randomContact, ...contacts]);
  };

  const sortByName = () => {
    let contactsByName = JSON.parse(JSON.stringify(contacts))

    contactsByName.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else if (a.name < b.name) {
        return -1
      } else {
        return 0
      }
    })
    setContacts(contactsByName)
  }

  const sortByPopularity = () => {
    let contactsByPopularity = JSON.parse(JSON.stringify(contacts))

    contactsByPopularity.sort((a, b) => b.popularity - a.popularity)
    setContacts(contactsByPopularity)
  }

  const removeContact = (id) => {
    let contactsAfterRemoval = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(contactsAfterRemoval)
  }

  return (
    <div className="App">
      <h1>Ironcontacts</h1>
      <button onClick={randomContact} >Add Random Contact</button>
      <button onClick={sortByName} >Sort by name</button>
      <button onClick={sortByPopularity} >Sort by popularity</button>

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
                <td>
                  <button onClick={() => removeContact(contact.id)}>
                    Delete
                  </button>
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
