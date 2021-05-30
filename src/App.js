import logo from './logo.svg';
import './App.css';
import Button from '../node_modules/@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="secondary">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
