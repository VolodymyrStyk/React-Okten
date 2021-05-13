import './UserDetails.css';

export const UserDetails = (props) => {
    const {location: {state: userInfo}} = props;
    const {name, id, email, phone, username, website, address: {city, street}, company} = userInfo;
    return (
        <div>
            <h2>User details:</h2>
            <div className={'user-details-wrap'}>
                <h3>{`ID:${id} ${name}`}</h3>
                <p>{`email:${email}; phone:${phone}`}</p>
                <p>{`${username}; web:${website}`}</p>
                <p>{`address: ${city}, ${street}`}</p>
                <p>{`Company: ${company.name}`}</p>
            </div>
        </div>
    )
}