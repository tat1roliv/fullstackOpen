import { useState } from 'react';
import Filter from './components/Filter';
import FormPersons from './components/FormPersons';
import ListPersons from './components/ListPersons';
import ListFilter from './components/ListFilter';

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
      <Filter value={filterParam} handleFilter={handleFilter}/>
      <ListFilter persons={filteredPersons} />

      <h3>Add a new</h3>
      
      <FormPersons 
        newName={newName}
        handleNameChange={handleNameChange}  
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
        addPerson={addPerson}
      />

      <div>Debug add person: {newName} - {newNumber}</div>
      <h3>Numbers</h3>
      <ListPersons persons={persons}/>
    </div>
  )
}

export default App