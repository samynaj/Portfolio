import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './nav.scss';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import ExplicitIcon from '@material-ui/icons/Explicit';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

const Navbar = () => {
  return (
    <div className='sidebar'>
      <ProSidebar width='80px'>
        <Menu>
          <Tooltip title='Home' placement='right'>
            <MenuItem icon={<HomeIcon/>}>
              <Link to='/'/>
            </MenuItem>
          </Tooltip>
          <Tooltip title='About' placement='right'>
            <MenuItem icon={<PeopleIcon/>}>
              <Link to='/about'/>
            </MenuItem>
          </Tooltip>
          <Tooltip title='Experience' placement='right'>
            <MenuItem icon={<ExplicitIcon/>}>
              <Link to='/experience'/>
            </MenuItem>
          </Tooltip>
          <Tooltip title='Projects' placement='right'>
            <MenuItem icon={<GitHubIcon/>}>
              <Link to='/projects'/>
            </MenuItem>
          </Tooltip>
          <Tooltip title='Contacts' placement='right'>
            <MenuItem icon={<CallIcon/>}>
              <Link to='/contacts'/>
            </MenuItem>
          </Tooltip>
        </Menu>
      </ProSidebar>
    </div>
    
  )
}

export default Navbar;