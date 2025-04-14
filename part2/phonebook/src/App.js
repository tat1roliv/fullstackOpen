import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122', id: 4 }
  ]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterParam, setFilterParam] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);

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
      phoneNumber: newNumber,
    }

    setPersons(persons.concat(personObject));
    setFilteredPersons(persons.concat(personObject)); // atualiza lista filtrada também
    setNewName('');
    setNewNumber('');
  }

  const handleNameChange = (event) => {
    //console.log("event.target.value",event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log("event.target.value",event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    //console.log("event.target.value",event.target.value);
    const filterStr = event.target.value;
    let filterResult = "";

    setFilterParam(filterStr);

    if(filterStr){
      //filter
      filterResult = persons.filter(person => person.name.toLowerCase().includes(filterStr.toLowerCase()))
      setFilteredPersons(filterResult)
    } else {  
      //show all
      setFilteredPersons(persons)
    }

   
  }

  let alertMessage = `${newName} is already added to phonebook`

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with: 
          <input           
          value={filterParam}
          onChange={handleFilter}/>
      </div>
      <div>debug 1:{filteredPersons.map(person => person.name).join(', ')}</div>

      <h3>add a new</h3>
      
      <form
       onSubmit={addPerson}>
        <div>
          name:
          <input 
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
        <div>
          number: 
          <input value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <div>debug: {newName} - {newNumber}</div>
      <ul>
        {persons.map(person => 
          <li key={person.id}>{person.id} - {person.name} - {person.phoneNumber}</li>
        )}
      </ul> 
    </div>
  )
}

export default App