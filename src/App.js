import logo from './logo.svg';
import './App.css';
import {UncontroledForms} from "./components/uncontroledForms/UncontroledForms";
import {ControledForms} from "./components/controledForms/ControledForms";
import {ControledSelect} from "./components/controledSelect/ControledSelect";
import {ControledSelectReducer} from "./components/controledSelectReducer/ControledSelectReducer";

function App() {
    return (
        <div>
            <UncontroledForms/>
            <hr/>
            <ControledForms/>
            <hr/>
            <ControledSelect/>
            <hr/>
            <ControledSelectReducer/>
        </div>
    );
}

export default App;
