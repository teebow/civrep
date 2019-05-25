import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import React from 'react';

import CropFree from '@material-ui/icons/CropFree';
import Poll from '@material-ui/icons/Poll';
import SwipeableViews from 'react-swipeable-views';

import { AppBar, Tabs, Tab, ListItemText, ListItemSecondaryAction, ListSubheader } from '@material-ui/core';

const History = () => (
    <List subheader={<ListSubheader>Historique</ListSubheader>} >
        <ListItem>
            <ListItemText primary="Wi-Fi" />
            <ListItemSecondaryAction>

            </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
            <ListItemText primary="Bluetooth" />
            <ListItemSecondaryAction >
                <ListItemText primary="19/29/19" edge="end" />
            </ListItemSecondaryAction>
        </ListItem>
    </List>
)




export default History