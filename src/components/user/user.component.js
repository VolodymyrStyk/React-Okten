export default function User(props) {
    const {name, age, status, id, deleteCurrentUser} = props;

    return <div className={'user'+id}>
        <h3>User name: {name}</h3>
        <p>User age: {age}</p>
        <p>User status: {status.toString()}</p>
        <button onClick={() => deleteCurrentUser(id)}>delete user</button>
        <hr/>
    </div>
}
