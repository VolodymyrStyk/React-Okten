export default function User(props) {
    let {age, name, status} = props;
    return (
        <div>
            <h3>{name} {status.toString()}</h3>
            <div>{age}</div>
        </div>
    );
}