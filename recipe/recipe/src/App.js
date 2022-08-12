import './App.css';

const App = () => {

  const APP_ID = '917df091';
  const APP_KEY = '7d5e6336dc34654486609295d5c92499';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-type" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
