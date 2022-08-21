import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChoreForm from "./components/choreForm/ChoreForm";
import ChoreChart from "./components/choreChart/ChoreChart";

function App() {
  const [choreLogs, setChoreLogs] = useState([]);
  const addChoreLog = (log) => {
    let logs = [...choreLogs, log];
    setChoreLogs(logs);
  };

  return (
    <div className='App'>
      <section>
        <ChoreForm addChoreLog={addChoreLog} />
        <ChoreChart chores={choreLogs} />
      </section>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
