import { useEffect, useState } from "react";
import "./App.css";
import SingleUser from "./components/SingleUser/SingleUser";

function App() {
  const [user, setUser] = useState([])

  const getSingleUser = async()=>{
    const response = await fetch("https://api.github.com/users/SaquibAsghar")
    const data = await response.json()
    console.table(data)
    setUser([data])

  } 

  useEffect(()=>{
    getSingleUser()
  }, [])
	return (
		<div className="App">
			<h1>Github Users</h1>
      {
        // console.log(user)
      }
      <SingleUser user = {user} />
		</div>
	);
}

export default App;
