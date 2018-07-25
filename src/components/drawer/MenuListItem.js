import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const listStyles = theme => ({
    nestedList: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

const MenuListItem = (props) => {
    const {
        classes,
        onClose,
        icon,
        text,
        link,
        nested,
    } = props;

    const styling = nested ? {
        className: classes.nestedList,
    } : {};

    return (
        <ListItem {...styling} button component={link} to={link} onClick={onClose}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={text}/>
        </ListItem>
    );
};

MenuListItem.defaultProps = {
    nested: false,
};

MenuListItem.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
    nested: PropTypes.bool,
};

export default withStyles(listStyles, {withTheme: true})(MenuListItem)