import './User.css'

export default function User({item,search}) {
  return (
    <div className={'wrap-user'} >
        <div>{item.id} -
            {item.name} -
            {item.email};</div>
        <button onClick={()=>search(item.id)} className={'details-btn'}>details</button>
    </div>
  );
}