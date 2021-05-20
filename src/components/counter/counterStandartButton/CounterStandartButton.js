export const CounterStandartButton = ({changeCounter}) => {
    return (
        <div>
            <button className={'button'} onClick={() => changeCounter('INC')}>INC (1)</button>
            <button className={'button'} onClick={() => changeCounter('DEC')}>DEC (1)</button>
            <br/><br/>
        </div>
    );
}
