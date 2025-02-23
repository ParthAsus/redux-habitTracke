import { createSlice } from '@reduxjs/toolkit';

export const habitSlice = createSlice({
  name: 'habit',
  initialState: { 
    habits: [],
  },
  reducers: {
    addHabit: (state, action) => {
      const newHabit = {
        id: Date.now().toString(),
        habitName: action.payload.habitName,
        frequency: action.payload.frequency,
        completedDate: [],
        createdAt: new Date().toISOString(),
      };
      state.habits.push(newHabit);
    },

    toggleHabit: (state, action) => {
      const habit = state.habits.find((h) => h.id === action.payload.habitId);
      if(habit){
        const index = habit.completedDate.indexOf(action.payload.date);
        if(index > -1){
          habit.completedDate.splice(index, 1);
        }else{
          habit.completedDate.push(action.payload.date);
        }
      }
    },

    removeHabit: (state, action) => {
      const initialHabitLength = state.habits.length;
      state.habits = state.habits.filter((h) => h.id !== action.payload.habitId);
      if(initialHabitLength === state.habits.length){
        console.log('Habit not found');
      }
    }
  },
});

export const {addHabit, toggleHabit, removeHabit} = habitSlice.actions;

export default habitSlice.reducer;