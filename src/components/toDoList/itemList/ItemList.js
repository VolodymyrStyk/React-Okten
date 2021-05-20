import {useSelector} from "react-redux";

export const ItemList = ({isDone, deleteDeal}) => {
    const toDoList = useSelector(state => state.toDoList);
    return (
        <div>
            {
                toDoList.map(({id, title, checked}) =>
                    <div className={'one-task'}>
                        <div>
                            <label>
                                <h2 key={id} className={String(!checked)}>{id}:{title}</h2>
                                Done
                                <input type="checkbox"
                                       name="checkbox"
                                       checked={checked}
                                       onChange={() => {
                                           isDone(id, checked)
                                       }}/>
                            </label>
                        </div>
                        <div>
                            <button onClick={() => {
                                deleteDeal(id)
                            }}  className={'button btn-delete'}>delete
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
