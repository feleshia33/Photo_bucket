import PropTypes from 'prop-types' //impr to import prop types

const Search = ({query}) => {
    return (
     <div>
          <input type="text" placeholder={query}/>
          <button>Search</button>
     </div>
    )
  }

  Search.defaultProps = {
       query: 'Search for photo image',
  }

  Search.propTypes = {
       query: PropTypes.string.isRequired,
  }
  
  export default Search;