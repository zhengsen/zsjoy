import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import MenuListItem from './MenuListItem';

import HomeIcon from '@material-ui/icons/Home';
import ArchiveIcon from '@material-ui/icons/Archive';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SettingsIcon from '@material-ui/icons/Settings';

const LeftMenuList = (props) => {
    const {onClose} = props;

    return (
        <List>
            <MenuListItem text='Home' icon={<HomeIcon/>} link='/' onClose={onClose}/>
            <MenuListItem text='Archives' icon={<ArchiveIcon/>} link='/' onClose={onClose}/>
            <MenuListItem text='Projects' icon={<SettingsIcon/>} link='/' onClose={onClose}/>
            <MenuListItem text='About' icon={<PersonOutlineIcon/>} link='/' onClose={onClose}/>
        </List>
    );
};

LeftMenuList.PropTypes = {
    onClose: PropTypes.func.isRequired,
};

export default LeftMenuList;
