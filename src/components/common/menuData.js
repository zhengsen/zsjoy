import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';

export const menuListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary='Inbox'/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <StarIcon/>
            </ListItemIcon>
            <ListItemText primary="Starred"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="Send mail"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DraftsIcon/>
            </ListItemIcon>
            <ListItemText primary="Drafts"/>
        </ListItem>
    </div>
);