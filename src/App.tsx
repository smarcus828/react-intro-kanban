import './App.css'
import TaskCard from './task-card'
import { Task } from "./data-tasks"

function App() {
  const task: Task = {
    title: "Do Something",
    id: "this is the id",
    points: 77
  }

  return (
    <>
      Something at the top
      <TaskCard task={task} />
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
