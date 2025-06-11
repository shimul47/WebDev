import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './Form'
import Comment from './CommentForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comment/>
    </>
  )
}

export default App
