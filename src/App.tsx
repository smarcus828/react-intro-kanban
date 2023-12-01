import './App.css'


function App() {

  return (
    <div className="text-4xl  border rounded-lg border-red-800 bg-gray-200 p-2 m-2" >
      Hello
    </div>

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
