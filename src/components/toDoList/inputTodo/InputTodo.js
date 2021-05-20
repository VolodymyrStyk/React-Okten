export const InputTodo = ({inputtedDeal,inputValue,saveNewDeal}) => {
  return (
      <div>
          <h1>Input your toDo list:</h1>
          <input type={'text'} onChange={inputtedDeal} value={inputValue} className={'input'}/><br/>
          <button onClick={saveNewDeal} className={'button btn-save'}>save</button>
      </div>
  );
}
