import AddHabit from "./components/AddHabit"
import ShowHabit from "./components/showHabit"

function App() {

  return (
    <div className="flex min-w-full border justify-center items-center pt-10 gap-5 flex-col">
      <h1 className="text-center text-red-900 text-4xl">Habit Tracker</h1>
      <AddHabit />
      <ShowHabit />
    </div>
  )
}

export default App
