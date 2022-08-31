import './App.css';
import PropTypes from 'prop-types' //impr to import prop types

const Search = ({query}) => {
     const onClick = () => {
         
     }

    return (
     <div>
          <input type='text' placeholder={query} 
          style={{color: '#468A2D'}}/>

          <button text='Search' onClick = {onClick} style={buttonStyle} 
          >Search</button>
     </div>
    )
  }

  Search.defaultProps = {
       query: 'Search photo images',
  }

  Search.propTypes = {
       query: PropTypes.string.isRequired,
       omClick: PropTypes.func,
  }

  const buttonStyle = {
     color: '#7E3A6C',
     backgroundColor:'#468A2D'
  }
  
  export default Search;