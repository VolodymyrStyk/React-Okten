import './Post.css'

export default function Post({item,searchPost}) {
  return (
      <div>
        <div>{item.id} -
            <h3>{item.title}</h3></div>
        <button onClick={()=> searchPost(item.id)}>details</button>
      </div>
  );
}