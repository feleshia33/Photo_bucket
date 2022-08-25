import PropTypes from 'prop-types' //impr to import prop types

const Search = ({query}) => {
    return (
     <div>
          <input type="text" placeholder={query} style={{color: '#468A2D'}}/>
          <button style={{color: '#468A2D'}} >Search</button>
     </div>
    )
  }

  Search.defaultProps = {
       query: 'Search photo images',
  }

  Search.propTypes = {
       query: PropTypes.string.isRequired,
  }
  
  export default Search;