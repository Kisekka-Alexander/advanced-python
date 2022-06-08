import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Tasks from './components/Tasks'
import './App.css'
import { useState } from 'react'

function App() {
  const[tasks, setTasks] = useState(
    [
      {
        id:1,
        text:'Task 1',
        day: 'Now',
      },
      {
        id:2,
        text:'Task 2',
        day: 'Now',
      },
      {
        id:1,
        text:'Task 1',
        day: 'Now',
      },
      {
        id:2,
        text:'Task 2',
        day: 'Now',
      },
    ]
  )
  return (
    <div className='App'>
    <Router>
    <Routes>
  
   <Route path='/' element={
      // <div className="App" id="outer-container">
      // <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      // </div>
      <Sidebar/>
     
    }/>
 
  <Route path='/tasks' element={
     <Tasks tasks={ tasks } />
     
  } />
  </Routes>
  </Router>
   
  </div>
  );
}

export default App;
