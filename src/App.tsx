import './App.css'
import AddToDo from './components/AddToDo' 
import Card from './components/card'
import NavBar from './components/navBar'
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <main>
      <h2>Todo Application</h2>
      <NavBar/>
      <AddToDo/>
      <Card/>
    </main>
  )
}

export default App
