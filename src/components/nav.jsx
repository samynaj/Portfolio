import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './nav.scss';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import ExplicitIcon from '@material-ui/icons/Explicit';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';

const Navbar = () => {
  return (
    <div className='sidebar'>
      <ProSidebar width='80px' collapsed>
        <Menu>
          <MenuItem><HomeIcon/></MenuItem>
          <MenuItem><PeopleIcon/></MenuItem>
          <MenuItem><ExplicitIcon/></MenuItem>
          <MenuItem><GitHubIcon/></MenuItem>
          <MenuItem><CallIcon/></MenuItem>
        </Menu>
      </ProSidebar>
    </div>
    
  )
}

export default Navbar;