import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {TodoProvider} from './context/Todo.tsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <TodoProvider>
    <App />
    </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
