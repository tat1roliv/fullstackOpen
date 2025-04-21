const ListPersons = ({ persons }) => {
    return (
        <ul>
        {persons.map(person => 
          <li key={person.id}>{person.id} - {person.name} - {person.phoneNumber}</li>
        )}
        </ul> 
    )
}

export default ListPersons;