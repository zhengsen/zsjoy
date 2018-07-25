import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/core/Menu';

import {APP_NAME} from "../../docs/appConstant";

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
};

const Header = (props) => {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        onClick={props.onMenuClick}
                        aria-label="open drawer">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        {APP_NAME}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onMenuClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header)