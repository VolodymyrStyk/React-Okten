import './App.css';
import {useState} from "react";


function App() {
    let [getCounter, setCounter] = useState(0);

    let increment = () => {
        getCounter++;
        setCounter(getCounter);
    }

    let decrement = () => {
        getCounter--;
        setCounter(getCounter);
    }
    let reset = () => {
        getCounter = 0;
        setCounter(getCounter);
    }
    let increaseStep = () => {
        getCounter += 5;
        setCounter(getCounter);
    }
    let decreaseStep = () => {
        getCounter -= 5;
        setCounter(getCounter);
    }

    return (
        <div>
            <div>This is counter: {getCounter}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={increaseStep}>Increment + 5</button>
            <br/>
            <button onClick={decrement}>Decrement</button>
            <button onClick={decreaseStep}>Increment - 5</button>
            <br/>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default App;
