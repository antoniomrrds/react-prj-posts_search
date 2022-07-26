import logo from './logo.svg';
import image from '../src/assets/lucy-19.jpg';
import './App.css';


function App() {
  return (
    // React Fragment  => <></>| <reactFragment>
     

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img  src={image}  className="App-logo" alt="logo" />
        <p>
         Olá Mundo !!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
// o react nao consegue retornar dois elementos a nao ser que estejam  dentro reactFragment 
//    <div>oi </div>
  );
}

export default App;
