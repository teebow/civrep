import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Link, IconButton, Dialog } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import AddIcon from '@material-ui/icons/AddCircle'
import DeleteIcon from '@material-ui/icons/RemoveCircle'
import UserCard from './UserDetails/UserCard';

import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function SimpleDialog(props) {

  const { onClose, selectedValue, ...other } = props;

  function handleClose() {
    onClose(selectedValue);
  }


  return (
    <Dialog TransitionComponent={Transition} keepMounted onClose={handleClose}
      aria-labelledby="simple-dialog-title" {...other} fullWidth>
      <DialogContent style={{ padding: 0 }} >
        <UserCard />
      </DialogContent>
    </Dialog>
  );
}




const UserItem = () => {

  const [open, setOpen] = React.useState(false);
  //const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    //setSelectedValue(value);
  };

  return (
    <>
      <ListItem >
        <Link href='/user'>
          <ListItemText primary="QDSD DQLSD" secondary="10 Tickets" />
        </Link>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="Add" onClick={handleClickOpen}>
            <AddIcon color="action" />
          </IconButton>
          <IconButton edge="end" aria-label="Delete">
            <DeleteIcon color="secondary" onClick={handleClickOpen} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <SimpleDialog open={open} onClose={handleClose} />
    </>
  )
}

const mockList = () => {
  return Array(20).fill(<UserItem />);
}

const AlignItemsList = (props) => {
  return (
    <List >
      {mockList()}
    </List>

  );
}

export default AlignItemsList;