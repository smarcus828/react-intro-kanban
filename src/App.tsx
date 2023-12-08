import './App.css'
import TaskCard from './components/TaskCard'
import { Task } from "./utils/data-tasks"

function App() {
  const tasks: Task[] = [
    {
      title: "Do the first thing",
      id: "id 1",
      points: 111,
    },
    {
      title: "Do the second thing",
      id: "id 2",
      points: 2222,
    },
    {
      title: "Do the third thing",
      id: "id 3",
      points: 333,
    },
    {
      title: "Do the fourth thing",
      id: "id 4",
      points: 44444,
    },


  ]

  return (
    <>
      Something at the top
      {tasks.map((task) => <TaskCard task={task} />)}

      {/* <TaskCard task={task} />
      <TaskCard task={task2} /> */}
      {/* <TaskCard title={task.title} id={task.id} points={task.points} />
      <TaskCard title="Fleenar the wonderful" id="Bus-1109" points={4560566} />
      <TaskCard title='TEST2' id='id2' />
      <TaskCard title='Develop' id='secondary information here' points={9999} /> */}
    </>
  )
}

export default App


// ***** Works ***
// const name="Steven Marcus";
// const button = <button>Click Me Fecker</button>;
// const bigRedCss = "text-4xl border rounded-lg p-2 m-2";

// function App() {

//   const numThings = 33;

//   const wholeThing = <div className={bigRedCss}>
//     Hello {name} !!!
//   {button}
//   </div>

//   return numThings > 4 ? wholeThing : <div>404</div>
// }





// *** Weird because wholeThing doesn't use quotes ""
// function App() {
//   const name="Steven Marcus";
//   const button = <button>Click Me</button>;
//   const bigRedCss = "text-4xl text-green-600"
//   const wholeThing = <div className={bigRedCss}>
//     Hello {name}
//   {button}
//   </div>
//     return wholeThing
//   }

// *** Another example with ternary return statement
// const name="Steven Marcus";
// const button = <button>Click Me Fecker</button>;
// const bigRedCss = "text-4xl text-blue-600 border-red-900";

// function App() {

//   const numThings = 3;

//   const wholeThing = <div className={bigRedCss}>
//     Hello {name} !!!
//   {button}
//   </div>

//   return numThings > 4 ? wholeThing : <div>404</div>
// }
