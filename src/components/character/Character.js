import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Character.css'

export default function Character({item = {}}) {
    const { name, age, images } = item;
// console.log(item.name.first);
  return (
    <div className={'wrap-character'}>
        <div>
            {name?.first}  {name?.last} - {age}
        </div>
        <img src={images?.main} alt=""/>
        <div>
            <button><Link>Show details</Link></button>
        </div>
    </div>
  );
}
