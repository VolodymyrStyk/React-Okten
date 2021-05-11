import './Post.css'

export default function Post({item, searchPost}) {
    return (
        <div className={'one-post'}>
            <div>ID: <b>{item.id}</b>
                <h3>{item.title}</h3>
            </div>
            <button onClick={() => searchPost(item.id)}>details</button>
        </div>
    );
}