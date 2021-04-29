import logo from './logo.svg';
import './App.css';
import CharacterPerson from "./components/character.person";

function App() {
  return (
    <div>
      <div className="spounge">
          <CharacterPerson title = {'Bob-1'} image = {'./img/1.png'}/>
          <CharacterPerson title = {'Bob-2'} image = {'./img/2.png'}/>
          <CharacterPerson title = {'Bob-3'} image = {'./img/3.png'}/>
          <CharacterPerson title = {'Bob-4'} image = {'./img/4.png'}/>
          <CharacterPerson title = {'Bob-5'} image = {'./img/5.png'}/>
      </div>
    </div>
  );
}

export default App;
