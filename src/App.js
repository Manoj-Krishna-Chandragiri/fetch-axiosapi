import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [fact, setFact] = useState("");
  const fetchClick = () => {
    fetchFact()
  }
  const axiosClick = () => {
      fetchFact1()
    }
  const fetchFact = () => {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => setFact(data.fact));
}

const fetchFact1 = () => {
    axios.get("https://catfact.ninja/fact").then((response) => {
    setFact(response.data.fact)
    });
  }
useEffect(() => {
  fetchFact()
}, []);
return (
  <div className="App">
    <h2>Press the button for a random cat fact!</h2>
    <hr />
    <button onClick= {() => fetchClick()}>Get Cat fact using fetch</button>&nbsp;&nbsp;&nbsp;
    <button onClick= {() => axiosClick()}>Get Cat fact using axios</button>
    <p>{fact}</p>
  </div>
);
}
export default App;