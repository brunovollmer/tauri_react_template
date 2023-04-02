import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactLogo from '@/assets/react.svg'
import { setName } from '@/store/name'
import './app.css'

function App() {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const greetMsg = useSelector(state => state.name.greeting)

  function greet() {
    dispatch(setName(username))
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <div className="row">
        <form
          onSubmit={e => {
            e.preventDefault()
            void greet()
          }}
        >
          <input
            id="greet-input"
            onChange={e => setUsername(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>
      </div>
      <p>{greetMsg}</p>
    </div>
  )
}

export default App
