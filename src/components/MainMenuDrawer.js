import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import {menuListItems} from './menuData'

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto'
    },
};

class MainMenuDrawer extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const {classes} = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>{menuListItems}</List>
            </div>
        );

        return (
            <div>
                <SwipeableDrawer
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                    open={this.state.left}>
                    <div
                        tabIndex={0}
                        role='button'
                        onKeyDown={this.toggleDrawer('left', false)}
                        onClick={this.toggleDrawer('left', false)}>
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

MainMenuDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMenuDrawer)