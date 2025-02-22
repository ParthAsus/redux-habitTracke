import React, { useState } from 'react'
import { addHabit } from '../slices/habitSlice';
import { useDispatch } from 'react-redux';

const AddHabit = () => {
  const [habitName, setHabitName] = useState('');
  const [frequency, setFrequency] = useState('daily');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(habitName.trim()){
      dispatch(addHabit({habitName, frequency}));
    }
    setHabitName('');
    setFrequency('daily');
  }
  return (
    <form className='flex flex-col gap-5 w-full items-center' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Habit Name"
        className="input input-bordered input-primary w-full max-w-2xl"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />

      <select className="select select-primary w-full max-w-2xl" value={frequency} onChange={(e) => setFrequency(e.target.value)}>
        <option>Daily</option>
        <option>Weekly</option>
      </select>

      <button className="btn btn-primary min-w-2.5 px-6 text-lg" type='submit'>Add Habit</button>

    </form>
  )
}

export default AddHabit
