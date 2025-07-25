import logo from './logo.svg';
import './App.css';
/* Statefull F.C */
import StatefullGreetings from './components/StatefullGreetings';




/* Stateless F.C */
/* import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import Halaan from './components/Halaan';
import HalaakaWithProps from './components/HalaakaWithProps'; */

function App() {
  return (
    <div className="App">
      <StatefullGreetings greeting="Welcome to central bank" name="Ali" />
    </div>

    /* Stateless F.C */
    /* <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="nice to meet you" name="ALi" age="565" />
      <Halaan />
      <HalaakaWithProps name="Kulan" title="worker" salary="low-level"/>
    </div> */
  );
}

export default App;
