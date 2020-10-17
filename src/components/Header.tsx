import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useHistory } from 'react-router-dom'

type Props = {
    title: string
}

const Header: React.FC<Props> = (props) => {
    const { title } = props
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const history = useHistory()

    return (
        <div className={classes.root}>

            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>

                <Toolbar variant="dense" className={classes.toolbar} >
                    <IconButton onClick={() => setOpen(state => !state)} edge="start" className={classes.toolbarIcon} aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" color="textPrimary">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={() => setOpen(false)} style={{color: 'white'}}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider style={{background: 'white'}} />
                <List>
                    <ListItem button onClick={() => history.push('/')}>
                        <ListItemIcon>
                            <DashboardIcon style={{color: 'white'}} />
                        </ListItemIcon>
                        <ListItemText primary="Home" style={{color: 'white'}}/>
                    </ListItem>

                    <ListItem button onClick={() => history.push('/dashboard')}>
                        <ListItemIcon>
                            <ShoppingCartIcon style={{color: 'white'}} />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" style={{color: 'white'}}/>
                    </ListItem>
                </List>
            </Drawer>
        </div >
    );
}

export default Header

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    background: {
        background: '#90CAF9'
    },
    drawerPaper: {
        backgroundColor: '#272425',
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
        zIndex: 1,

        height: '100vh',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        height: 0,
        // marginBottom: '48px',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: 0,
        // [theme.breakpoints.up('sm')]: {
        //     width: theme.spacing(9),
        // },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        background: '#90CAF9',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
}));