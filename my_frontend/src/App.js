import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Tasks from './components/Tasks'

function App() {
  return (
    <Router>
    <Routes>
  
    <Route path='/' element={
      <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
    }/>
 
  <Route path='/tasks' element={<Tasks />} />
  </Routes>
  </Router>
  );
}

export default App;
