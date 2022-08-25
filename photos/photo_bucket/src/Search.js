const Search = (props) => {
    return (
     <div>
          <input type="text" placeholder={props.query}/>
          <button>Search</button>
     </div>
    )
  }

  Search.defaultProps = {
       query: 'Search for photo image'
  }
  
  export default Search;