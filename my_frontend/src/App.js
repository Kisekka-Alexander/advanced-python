import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Tasks from './components/Tasks'
import './App.css'

function App() {
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
    
     <Tasks />
     
  } />
  </Routes>
  </Router>

  </div>
  );
}

export default App;
