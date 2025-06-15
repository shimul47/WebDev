import { useState } from 'react'
import Todo from './components/todo'
import './App.css'
import {Provider } from "react-redux"

function App() {
  

  return (
    <>
    <Provider>
      <Todo/>
    </Provider>
    </>
  )
}

export default App
