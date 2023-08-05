import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greeting from './Greeting'
import BigCats from './BigCats'
import Emoji from './Emoji'
import Calculator from './Calculator'
import './App.css'


function ExampleComponent() {

return (
<div className="ExampleComponent componentBox">
<h1>My Example Component</h1>
<p>My first React component!</p>
</div>
)
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ExampleComponent/>
      <b></b>

      {/* Exercise 1 */}
        <h1>Exercise 1</h1>
        <Greeting />
        <Greeting name="John" />

      {/* Exercise 2 */}
        <h1>Exercise 2 & 4 & 5</h1>
        <BigCats />

      {/* Exercise 3 */}
        <h1>Exercise 3</h1>
        <Emoji />

      {/* Exercise 6 */}
        <h1>Exercise 6</h1>
        <Calculator />
    </>
    
  )
}

export default App
