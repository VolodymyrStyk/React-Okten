import {useState} from "react";

export const ControledForms = () => {

    let [changeFormValue, setFormValue] = useState({login: 'log', password: 'pass'});
    let {login, password} = changeFormValue;

    const changeValue = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormValue({...changeFormValue,[name]:value})
        console.log(changeFormValue);
        console.log({[name]:value});
    }

    const submit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div>Controlled</div>
            <form onSubmit={submit}>
                <input onChange={changeValue} type="text" name={'login'} placeholder={'login'}
                       value={login}/>
                <input onChange={changeValue} type="text" name={'password'}
                       placeholder={'password'} value={password}/>
                <button>submit</button>
            </form>
        </div>
    );
}
