import './App.css';
import Routes from "./routes/Routes";
import {Parent} from "./components/Parent";
import {createContext} from "react";

export let MyContext = createContext('Default');

function App() {
    return (
        <Routes/>
    );
}

export default App;
