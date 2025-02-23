import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeHabit, toggleHabit } from '../slices/habitSlice';
const ShowHabit = () => {
  const habits = useSelector((state) => state.habit.habits);
  const today = new Date().toISOString().split('T')[0];
  const dispatch = useDispatch();
  console.log(habits);

  const handleCompletedToggle = (habitId) => {
    dispatch(toggleHabit({habitId, date: today}));
  }

  const handleRemoveHabit = (habitId) => {
    dispatch(removeHabit({habitId}));
  }

  const getHabitStreak = (habit) => {
    let streak = 0;
    const currentDate = new Date();

    while(true){
      const dateString = currentDate.toISOString().split('T')[0];
      if(habit.completedDate.includes(dateString)){
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      }else{
        break;
      };
    };

    return streak;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
      {habits.map((habit) => (
        <div key={habit.id} className="card bg-primary text-base-300 w-full max-w-2xl shadow-xl ">
          <div className="card-body relative py-5">
            <h2 className="card-title capitalize">{habit.habitName}</h2>
            <p>{habit.frequency}</p>
            <p className='font-medium text-sm'>Current Streak: {getHabitStreak(habit)}</p>
            <div className=' flex gap-5 absolute end-5 top-10'>
              <button className={`btn ${habit.completedDate.includes(today) ? 'btn-success' : 'btn-warning'} `} 
                onClick={() => handleCompletedToggle(habit.id)}
                // disabled={habit.completedDate.includes(today)}
              >
                {habit.completedDate.includes(today) ? "Completed" : 'Mark it Completed'}
              </button>
              <button className="btn btn-circle"
                onClick={() => handleRemoveHabit(habit.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}

    </div>


  )
}

export default ShowHabit;
