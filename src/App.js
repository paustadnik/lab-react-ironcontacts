import './App.css';
import contactsDB from './contacts.json'

function App() {

  const fiveContacts = contactsDB.slice(0, 5)
  console.log(fiveContacts)

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            
          </tr>
        </thead>

        <tbody>
          {fiveContacts.map((contact) => {
            return (
              <tr>
                <td>
                <img src={contact.pictureUrl} style={{width: '60px'}}/>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>

              
            )
          })}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
