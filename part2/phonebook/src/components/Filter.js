const Filter = ({filterParam, handleFilter}) => {
    return (
        <div>
            filter shown with: 
            <input           
            value={filterParam}
            onChange={handleFilter}/>
        </div>
    )
  }
  
  export default Filter;