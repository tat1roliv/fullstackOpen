import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1,
     }
  ]); 
  const [newName, setNewName] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personExists = persons.some(person => person.name === newName);

    if (personExists) {
      alert(alertMessage)
      return;
    } 
    
    const personObject = {
      name: newName,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }
  const handleNameChange = (event) => {
    console.log("event.target.value",event.target.value)
    setNewName(event.target.value)
  }

  let alertMessage = `${newName} is already added to phonebook`

  return (
    <div>
      <h2>Phonebook</h2>
      <form
       onSubmit={addPerson}>
        <div>
          name:
          <input 
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <ul>
        {persons.map(person => 
          <li key={person.id}>{person.id} - {person.name}</li>
        )}
      </ul> 
    </div>
  )
}

export default App