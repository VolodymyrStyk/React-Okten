import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import './ToDoList.css'
import {InputTodo} from "./inputTodo/InputTodo";
import {ItemList} from "./itemList/ItemList";

export const ToDoList = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const {toDoList} = state;
    const lastId = toDoList.length + 1;
    const [inputValue, setInputValue] = useState(null);
    const saveNewDeal = () => {
        if (inputValue) {
            const newItem = {
                id: lastId,
                title: inputValue
            }
            toDoList.push(newItem)
            dispatch({type: 'SAVE', payload: [...toDoList]})
        }
    };
    const inputtedDeal = (e) => {
        const {target: {value}} = e;
        setInputValue(value);
    }
    const deleteDeal = (id) => {
        console.log(id)
        const filtered = toDoList.filter(value => value.id !== id);
        dispatch({type: 'DELETE', payload: [...filtered]})
    }
    const isDone = (id, isChecked) => {
        toDoList.filter(value => value.id === id)[0].checked = !isChecked;
        console.log(toDoList);
        dispatch({type: 'CHECKED', payload: [...toDoList]})
    }
    return (
        <div className={'wrap-todo'}>
            <div className={'wrap-todo-list'} >
                <InputTodo
                    inputtedDeal={inputtedDeal}
                    inputValue={inputValue}
                    saveNewDeal={saveNewDeal}
                />
                <ItemList deleteDeal={deleteDeal} isDone={isDone}/>
            </div>
        </div>
    );
}
