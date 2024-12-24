import { useSelector, useDispatch } from 'react-redux'; 
import './App.css'

function App() {
  const count = useSelector(state => state.count); 
  const dispatch = useDispatch();
  return (
    <>
      <div> 
        <h1>Count: {count}</h1> 
        <button className={count === 0 ? 'disabled' : ''} onClick={() => dispatch({ type: 'DECREMENT'})}>Decrement</button> 
        <button className={count === 5 ? 'disabled' : ''} onClick={() => dispatch({ type: 'INCREMENT'})}>Increment</button> 
      </div>
    </>
  )
}

export default App
