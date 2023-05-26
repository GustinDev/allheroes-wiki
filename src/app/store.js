import { configureStore } from '@reduxjs/toolkit';
//Reducer - Podemos ponerle otro nombre.
import heroesReducer from '../features/task/heroesSlice';

export const store = configureStore({
  //Añadimos el reducer.
  reducer: {
    heroesState: heroesReducer,
  },
});

//*El nombre del reducer es el mismo que le ponemos al Slice.

//Aquí creamos el store, es como una DB (en Front) para los estados de redux.
