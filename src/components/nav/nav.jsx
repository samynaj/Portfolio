import React, {useState} from "react"
import './nav.scss';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import AppsIcon from '@material-ui/icons/Apps';
import CallIcon from '@material-ui/icons/Call';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider"
import Coder from "../../resources/coder.jpg"
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuSlideRight from "@material-ui/core/Drawer"


const useStyles = makeStyles(theme => ({
  menuButton: {
    fontSize: "3rem"
  },
  appbar: {
    backgroundColor: "#111822"
  },
  sliderContainer: {
    width: 250,
    background: '#111822',
    height: "100%",

  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: '#00c2cb'
  }
  
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
const menuItems = [
  {
    listIcon: <HomeIcon />,
    listText: "Home",
    href: "#home"
  },
  {
    listIcon: <PersonIcon />,
    listText: "About",
    href: "#about"
  },
  {
    listIcon: <AppsIcon />,
    listText: "Projects",
    href: "#projects"
  },
  {
    listIcon: <PeopleIcon />,
    listText: "Testimonials",
    href: "#testimony"
  },
  {
    listIcon: <CallIcon />,
    listText: "Contacts",
    href: "#contact"
  }
]

const Navbar = (props) => {
  const [state, setState] = useState({
    right: false
  });
  const classes = useStyles();

  const toggleSlide = (slider, open) => () =>  {
    setState({...state, [slider]: open})
  } 

  const sideBar = slider => ( 
    <Box className={classes.sliderContainer} component="div" onClick={toggleSlide(slider, false)}>
      <Avatar className={classes.avatar} src={Coder} alt="coder"/>
      <Divider />
      <List>
        { menuItems.map((item, key) => (
          <Link href={item.href} key={key} >
            <ListItem button>
              <ListItemIcon className={classes.listItem}>
                {item.listIcon}
              </ListItemIcon>
              <ListItemText className={classes.listItem} primary={item.listText} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )

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
            <IconButton className="menubook" onClick={toggleSlide("right", true)}>
              <MenuBookIcon className={classes.menuButton} />
            </IconButton>
            <MenuSlideRight anchor="right" open={state.right} onClose={toggleSlide("right", false)}>
              {sideBar("right")}
            </MenuSlideRight>
          </ToolBar>
        </AppBar>
      </HideOnScroll>
    </div>
    
  )
}

export default Navbar;