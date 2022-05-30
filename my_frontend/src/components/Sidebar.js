
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Menu>
      <a href="/">
        Home
      </a>
     
      <Link to='/tasks'>Tasks</Link>
    </Menu>
  
  
  )
}

export default Sidebar