import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
	const { count } = useSelector((storeState) => storeState);
	// useSelector is hook of react-redux which provide state from store to the component.
	// It take a callback function with arg state and return the state object


  const dispatch = useDispatch()
  // useDispatch hook of react-redux helps in dispatching an action to the redux store along with the "type" and "payload"

  const onIncrement = () =>{
    dispatch({
      type: "INCREMENT",
      payload: 1
    })
  }
  const onDecrement = () =>{
    dispatch({
      type: "DECREMENT",
      payload: 1
    })
  }
  const onAddToIt = () =>{
    dispatch({
      type: "ADDTOIT",
      payload: 10
    })
  }
	return (
		<div className="App">
			<h3>React Router</h3>
			<h4>Counter App</h4>
			<h5>Counter : {count}</h5>
			<div>
				<button onClick={onIncrement}>Increment</button>
			</div>
			<div>
				<button onClick={onDecrement}>Decrement</button>
			</div>
			<div>
				<button onClick={onAddToIt}>Increment 10 to it</button>
			</div>
		</div>
	);
}

export default App;
