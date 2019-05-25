import React from 'react';

import CropFree from '@material-ui/icons/CropFree';
import Poll from '@material-ui/icons/Poll';
import SwipeableViews from 'react-swipeable-views';

import { AppBar, Tabs, Tab } from '@material-ui/core';
import History from '../History/History';

//<img src="/static/login-background.jpg" alt="login image"/>
const UserDetails = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className="container">
            <AppBar position="static" color="default">
                <Tabs
                 value={value}
                 onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab icon={<Poll />} aria-label="Historique" />
                    <Tab icon={<CropFree/>} aria-label="QrCode" />
                </Tabs>
            </AppBar>
            <SwipeableViews  index={value}
        onChangeIndex={handleChangeIndex}>
                <History />
                <>Item Two</>
            </SwipeableViews>
            <style jsx>{`
        .container {
        };
      `}
            </style>
        </div>
    )
};


export default UserDetails