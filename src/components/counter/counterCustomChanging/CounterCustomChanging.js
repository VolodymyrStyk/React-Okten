export const CounterCustomChanging = ({customValue, changeCustomValue, changeCounter}) => {
    return (
        <div>
            <div>
                <label>Custom value :
                    <input type="number" value={customValue} onChange={changeCustomValue}/>
                </label>
            </div>
            <button className={'button'} onClick={() => changeCounter('INC_CUSTOM', customValue)}>
                INC CUSTOM +({customValue})
            </button>
            <button className={'button'} onClick={() => changeCounter('DEC_CUSTOM', customValue)}>
                DEC CUSTOM -({customValue})
            </button>
        </div>
    );
}
