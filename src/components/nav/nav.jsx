// import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './nav.scss';
// import HomeIcon from '@material-ui/icons/Home';
// import PeopleIcon from '@material-ui/icons/People';
// import ExplicitIcon from '@material-ui/icons/Explicit';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import CallIcon from '@material-ui/icons/Call';
// import { Link } from 'react-router-dom';
// import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link"

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appbar: {
    backgroundColor: "#111822"
  },
  
}))

const HideOnScroll = (props) => { 
  const {children, window} = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <div className='sidebar'>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar}>
          <ToolBar className="toolbar">
            <IconButton className="img-button">
              <img src="https://i.pinimg.com/originals/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.png" alt="webdev"/>
            </IconButton>
            <div className="nav-buttons">
              <Link href="#home" color="inherit">
                <Button color="inherit">Home</Button>
              </Link>
              <Link href="#about" color="inherit">
                <Button color="inherit">About</Button>
              </Link>
              <Link href="#projects" color="inherit">
                <Button color="inherit">Projects</Button>
              </Link>
              <Link href="#testimony" color="inherit">
                <Button color="inherit">Testimonials</Button>
              </Link>
              <Link href="#contact" color="inherit">
                <Button color="inherit">Contact</Button>
              </Link>
              
            </div>
            
          </ToolBar>
        </AppBar>
      </HideOnScroll>

      {/* <ProSidebar width='80px'>
        <Menu className='menu'>
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
      </ProSidebar> */}
    </div>
    
  )
}

export default Navbar;