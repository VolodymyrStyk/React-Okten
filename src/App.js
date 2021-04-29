import './App.css';
import {useState} from "react";
import Car from "./components/car/car.component";

let carsArray = [
    {
        name: 'Ford',
        model: 'Focus',
        color: 'White',
        engine: 'diesel',
        speed: 300,
        src: './img/ford.jpg'
    },
    {
        name: 'Opel',
        model: 'Astra',
        color: 'Black',
        engine: 'diesel',
        speed: 310,
        src: './img/opel.jpg'
    }, {
        name: 'Renault',
        model: 'Megan',
        color: 'Silver',
        engine: 'diesel',
        speed: 290,
        src: './img/renault.jpg'
    }, {
        name: 'Volkswagen',
        model: 'Golf',
        color: 'Green',
        engine: 'benzin',
        speed: 330,
        src: './img/volkswagen.jpg'
    }, {
        name: 'Audi',
        model: 'A6',
        color: 'Dark Gray',
        engine: 'benzin',
        speed: 350,
        src: './img/audi.jpg'
    }
];
let cars = JSON.stringify(carsArray);
cars = JSON.parse(cars);
cars.map((value, index) => value.id = index);
let saveArr = [];

function App() {
    let [setCars, getCars] = useState(cars);
    let removeFirst = () => {
        let car = setCars.shift();
        saveArr.unshift(car);
        getCars([...setCars]);
    }
    let removeLast = () => {
        let car = setCars.pop();
        saveArr.push(car);
        getCars([...setCars]);
    }
    let addFirst = () => {
        if (saveArr.length) {
            let car = saveArr.shift();
            setCars.unshift(car);
            getCars([...setCars]);
        }
    }
    let addLast = () => {
        if (saveArr.length) {
            let car = saveArr.pop();
            setCars.push(car);
            getCars([...setCars]);
        }
    }
    return (
        <div>
            <button onClick={removeFirst}>Remove First Car</button>
            <button onClick={removeLast}>Remove Last Car</button>
            <br/>
            <button onClick={addFirst}>Add First Car</button>
            <button onClick={addLast}>Add Last Car</button>
            <div className={'cars-wrap'}>{
                setCars.map((value) => <Car key={value.id} {...value}/>
                )
            }</div>
        </div>
    );
}

export default App;
