import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { actions } from './store';


function App() {
  const {count} = useSelector(state => state )
  const dispatch = useDispatch()

  const onAdd = () =>{
    dispatch(actions.increment(4))
    
  }
  const onDec = () =>{
    dispatch(actions.decrement(-1))

  }
  const onAddTo = () =>{
    dispatch(actions.addToIt(10))
  }


  return (
    <div className="App">
     <h4>Redux toolkit</h4>
     <h4>Counter App</h4>
     <h5>Count : {count}</h5>
     <button onClick={onAdd}>Increment</button>
     <button onClick={onDec}>Decrement</button>
     <button onClick={onAddTo}>AddTo10</button>
    </div>
  );
}

export default App;
