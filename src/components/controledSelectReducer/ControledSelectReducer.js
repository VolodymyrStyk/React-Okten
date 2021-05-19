import {useEffect, useReducer, useState} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
            }
        case 'SET_ID':
            return {
                ...state,
                userId: action.payload,
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            }
        default:
            return {
                ...state
            }
    }
}

export const ControledSelectReducer = () => {

    const [state, dispatch] = useReducer(reducer,{users: [], userId: 0, user: null});
    const {users, userId, user} = state;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch({type: 'SET_USERS', payload: value})
            })
    }, [])

    useEffect(() => {
        if (userId > 0) {
            fetch('https://jsonplaceholder.typicode.com/users/' + userId)
                .then(value => value.json())
                .then(value => {
                    dispatch({type: 'SET_USER', payload: value})
                })
        }
    }, [userId])

    const onchangeUser = (e) => {
        const id = e.target.value;
        dispatch({type:'SET_ID', payload: id});
    };
    return (
        <div>
            <div>With Reducer</div>
            <form>
                <select onChange={onchangeUser} name={'user'}>
                    {
                        users.map(value =>
                            <option value={value.id} key={value.id}>
                                {value.name}
                            </option>)
                    }
                </select>
            </form>
            <div>
                {
                    user && <div>{JSON.stringify(user)}</div>
                }
            </div>
        </div>
    );
}
