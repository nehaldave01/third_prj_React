import React from 'react'

function App() {

  let name = "Hello World!";

  // array
  // let arr = ['a','b','c','d','e','f']
  let arr = [12, 41, 4, 5, 82, 5]

  // obj
  let obj = {
    'name':"Nehal Dave",
    'class': "third",
    'age' : 20,
    'rank': "first"
  }

   let status = true;
  return (
    <div className='App'>
        <h1>{name}</h1>

        {/* map for arr need to iterarte each element */}
        {arr.map((e) => {
          return (
            <div>{e}</div>
          )
        }
        )}

        <div>
        {obj.name}
        </div>

        <div>{10 *20}</div>

      {/* ternary operator */}
      {
      (status) ? <h1 style={{color:"red"}}> Welcome to the page </h1> :  " "}

    </div>
  )
}

export default App