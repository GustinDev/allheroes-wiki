import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addHeroe } from './features/task/heroesSlice';

function App() {
  let heroesList = useSelector((state) => state.heroesState.allheroes);

  const [valueInput, setValueInput] = useState('');

  let onInputChange = ({ target }) => {
    const { value } = target;
    setValueInput(value);
  };

  let dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHeroe(valueInput));
    setValueInput('');
  };

  console.log(heroesList);

  return (
    <>
      <h1>Heroes App</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={onInputChange}
          type='text'
          name='heroe'
          placeholder='Escribe tu heroe.'
          value={valueInput}
        />
        <button type='submit'>Agregar Heroe</button>
      </form>
    </>
  );
}

export default App;
