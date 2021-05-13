import "./UserDetails.css"

export const UserDetails=(props)=>{
    const {location:{state:{item:{avatar,email,first_name,id,last_name}}}} = props;
    return(
        <div className={'wrap-user-details'}>
            <h3>User {id} details:</h3>
            <p>{first_name} {last_name}</p>
            <div><img src={avatar} alt=""/></div>
            <p>Email: {email}</p>
        </div>
    )
}
