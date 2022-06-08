import Sidebar from './Sidebar'
const Tasks = ( { tasks }) => {
  return (
    <div className='App'>
    <Sidebar/>
    <div className='Content'>
       <div className='Container'>
         {tasks.map((task)=>(
           <h3 key={task.id}>{task.text}</h3>
         ))}
       </div>
       <footer>
        <a href="/"> Home</a>
        </footer>
    </div>
    </div>
    
  )
}

export default Tasks