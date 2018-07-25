import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import LeftMenuList from '../drawer/LeftMenuList';

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 60,
        marginBottom: 20,
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 70,
        height: 70,
    },
    drawerPaper: {
        height: '100%',
        width: 240,
    },
};

const MainMenuDrawer = props => (
    <Drawer
        type='temporary'
        classes={{paper: props.classes.drawerPaper}}
        onClose={props.onClose}
        open={props.open}>
        <div>
            <div className={styles.row}>
                <Avatar
                    alt='Celine'
                    className={classNames(props.classes.avatar, props.classes.bigAvatar)}>
                    C
                </Avatar>
            </div>

            <Divider/>

            <LeftMenuList onClose={props.onClose}/>
        </div>
    </Drawer>
);

MainMenuDrawer.defaultProps = {
    open: false,
};

MainMenuDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool,
};

export default withStyles(styles)(MainMenuDrawer)