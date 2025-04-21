const ListFilter = ({ persons }) => {
    return (
        <div>Search result :{persons.map(person => person.name).join(', ')}</div> 
    )
}

export default ListFilter;