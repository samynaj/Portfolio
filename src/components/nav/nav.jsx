import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './nav.scss';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import ExplicitIcon from '@material-ui/icons/Explicit';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='sidebar'>
      <ProSidebar width='80px'>
        <Menu>
          <MenuItem icon={<HomeIcon/>}>
            Home
            <Link to='/'/>
          </MenuItem>
          <MenuItem icon={<PeopleIcon/>}>
            About
            <Link to='/about'/>
          </MenuItem>
          <MenuItem icon={<ExplicitIcon/>}>
            Experience
            <Link to='/experience'/>
          </MenuItem>
          <MenuItem icon={<GitHubIcon/>}>
            Projects
            <Link to='/projects'/>
          </MenuItem>
          <MenuItem icon={<CallIcon/>}>
            Contacts
            <Link to='/contacts'/>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
    
  )
}

export default Navbar;