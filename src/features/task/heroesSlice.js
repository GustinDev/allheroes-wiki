import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allheroes: ['Batman', 'Superman'],
};

//Aqui creamos los reducers (slice).
export const heroesSlice = createSlice({
  name: 'heroesState',
  initialState,
  reducers: {
    addHeroe: (state, action) => {
      state.allheroes.push(action.payload);
    },
    // addTask: (state, action) => {
    //   state.tasks.push(action.payload);
    // },
  },
});

//Exportamos los reducers
export const { addHeroe } = heroesSlice.actions;

export default heroesSlice.reducer;
