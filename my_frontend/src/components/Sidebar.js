
// import { slide as Menu } from 'react-burger-menu'
// import { Link } from 'react-router-dom'
import '../App.css'
import {SidebarData} from './SidebarData'

const Sidebar = () => {
  return (
    // <Menu>
    //   <a href="/">
    //     Home
    //   </a>
    //   <Link to='/tasks'>Tasks</Link>
    // </Menu>
  
  <div className='Sidebar'>
    <ul className='SidebarList'>
       {SidebarData.map((val,key)=> {
         return(
         <li className='row' key={key} onClick={()=>{window.location.pathname=val.Link}}>
           {" "}
         <div id='icon'>{val.icon}</div>
         {" "}
         <div id='title'>{val.title}</div>
         </li>
         )
         
       })}
    </ul>
  </div>
  )
  
}

export default Sidebar