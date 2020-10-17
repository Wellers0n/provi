import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 2,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    background: {
        background: '#90CAF9',

    }
}));


const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.background}>
                <Toolbar variant="dense" className={classes.center}>
                    <Typography color="textPrimary">
                        Copyright © Provi
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header