export const CounterSetValue = ({initialValue, changeinitialValue, changeCounter}) => {
    return (
        <div>
            <label>Set Counter :
                <input type="number" value={initialValue} onChange={changeinitialValue}/>
                <button className={'button'} onClick={() => changeCounter('SET_COUNTER', initialValue)}>
                    SET ({initialValue})
                </button>
            </label>
        </div>
    );
}
