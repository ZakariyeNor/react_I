import logo from './logo.svg';
import './App.css';
import RenderingLists from './components/RenderingLists';

/* React data flow */
/* import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodsAsPropsParent'; */

/* Nesting components */
/* import NestingComponents from './components/NestingComponents'; */

/* Conditional components */
/* import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional'; */

/* Event Binding */
/* import EventBinding from './components/EventBinding'; */

/* Events */
/* import EventsFunctional from './components/EventsFunctional'; */
/* import EventsClass from './components/EventsClass'; */

/* ES7 snippets */
/* import ES7Snippets from './components/ES7Snippets'; */

/* Statefull F.C */
/* import StatefullGreetingsWithPrevs from './components/StateGreetingsWithPrevs'; */

/* Stateless F.C */
/* import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import Halaan from './components/Halaan';
import HalaakaWithProps from './components/HalaakaWithProps'; */

function App() {
  return (
    <div className="App">
      <RenderingLists />
    </div>
    
    
    /* React data flow */
    /* <div className="App">
      <MethodsAsPropsParent />
    </div> */
    
    /* Nesting Components */
    /* <div className="App">
      <NestingComponents />
    </div> */


    /* Conditional Rendering */
    /* <div className="App">
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional user={false} />
    </div> */

    /* Event binding
    <div className="App">
      <EventBinding />
    </div> */

    /* <div className="App">
      <EventsClass />
      <EventsFunctional />
    </div> */

    /* Statfull F.C */
    /* <div className="App">
      <StatefullGreetingsWithPrevs greeting="Welcome to central bank" name="Honolulu" option="Add meeting" />
    </div> */

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
