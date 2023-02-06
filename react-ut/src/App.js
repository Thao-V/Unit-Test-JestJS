import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p> Login </p>
      <input type="text"/>
      <input type="password"/>
      <button >Submit</button>
    </div>
  );
}

export function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

export default App;
