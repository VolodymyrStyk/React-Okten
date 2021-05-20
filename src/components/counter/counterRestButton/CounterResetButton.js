export const CounterResetButton = ({changeCounter}) => {
    return (
        <div>
            <button className={'button reset-btn'} onClick={() => changeCounter('RES')}>
                RES (0)
            </button>
        </div>
    );
}
