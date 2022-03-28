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
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            
          </tr>
        </thead>

        <tbody>
          {fiveContacts.map((contact) => {
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
