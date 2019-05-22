import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  
});

const UserItem = classes => {
    return (
     <ListItem >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="QDSD DQLSD"
        />
        <ListItemSecondaryAction>
        <Typography component="span" className={classes.inline} color="colorPrimary">
                10
        </Typography>
        </ListItemSecondaryAction>
      </ListItem>
)}

const mockList = () => {
    return Array(20).fill(<UserItem />);
}

const AlignItemsList = (props) => {
  const { classes } = props;
  return (
    <List className={classes.root}>
        {mockList()}
    </List>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);