import './App.css';
import { menuItems } from './menus';

function App() {
  return (
    <div className="App">
      {
        menuItems.map(menu => console.log(menu))
      }
    </div>
  );
}

export default App;
