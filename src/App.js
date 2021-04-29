import logo from './logo.svg';
import './App.css';
import CarComponents from "./components/car.components";

function App() {
    return (
        <div>
            <div className={'auto'}>
                <CarComponents title={'Renault Megane'} image={'./img/megan.jpg'}
                               description={'Renault Mégane (укр. Рено Меган) — компактні автомобілі, ' +
                               'що виробляються компанією Renault. Вони виготовляються з 1995 року.'}/>
                <CarComponents title={'Opel Astra'} image={'./img/astra.jpg'}
                               description={'Opel Astra (укр. Опель Астра) — сімейство компактних автомобілів,' +
                               ' що виробляються німецькою компанією Opel. Вони виготовляються з 1991 ' +
                               'і прийшли на зміну компактним автомобілям Opel Kadett.'}/>
                <CarComponents title={'Peugeot 308'} image={'./img/peugeot.jpg'}
                               description={'Peugeot 308 (укр. Пежо 308) — сімейство компактних автомобілів ' +
                               'компанії Peugeot, яке замінило Peugeot 307 в 2007 році.'}/>
            </div>
        </div>
    );
}

export default App;
