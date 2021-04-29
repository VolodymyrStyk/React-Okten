import './car.style.css'

export default function Car(props) {
    let {name, model, color, engine, speed, src} = props;

    return <div className={'car'}>
        <h3>{name}</h3>
        <img src={src} alt="car"/>
        <p><i>Car model:</i> <b>{model}</b></p>
        <p><i>Car color:</i> <b>{color}</b></p>
        <p>C<i>ar engine:</i> <b>{engine}</b></p>
        <p><i>Car speed:</i> <b>{speed}</b></p>
    </div>
}