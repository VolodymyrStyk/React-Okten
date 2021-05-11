import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Character.css'

export default function Character({item}) {
// console.log(item.name.first);
  return (
    <div className={'wrap-character'}>
        <div>
            {item.name.first}  {item.name.last} - {item.age}
        </div>
        <img src={item.images.main} alt=""/>
        <div>
            <button><Link>Show details</Link></button>
        </div>
    </div>
  );
}