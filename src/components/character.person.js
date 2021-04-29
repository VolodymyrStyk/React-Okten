import './character.style.css';

function CharacterPerson(props){
let {title, image} = props;
return <div className={'div-bob'}>
    <h2>{title}</h2>
    <img src={image} alt="spounge Bob" className={'img-bob'}/>
</div>
}

export default CharacterPerson;