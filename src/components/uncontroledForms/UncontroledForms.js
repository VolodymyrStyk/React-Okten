import {createRef, useRef, useState} from "react";

export const UncontroledForms = () => {
    const login = createRef();
    const password = createRef();

    const submit = (e) => {
        console.log(login.current.value);
        console.log(password.current.value);
        e.preventDefault();
    }
    return (
        <div>
            <div>Uncontrolled</div>
            <form onSubmit={submit}>
                <input type="text" name={'login'} ref={login} placeholder={'login'}/>
                <input type="text" name={'password'} ref={password}  placeholder={'password'}/>
                <button>submit</button>
            </form>
        </div>
    );
}
