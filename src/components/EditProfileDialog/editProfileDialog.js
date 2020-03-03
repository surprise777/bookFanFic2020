import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import Edit from '@material-ui/icons/Edit';
import { Input } from '@material-ui/core';
import Grid from '../../containers/mui/grid';

const informations = ['Name', 'Address', 'Email', 'Phone'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <List>
        {informations.map((info) => (
          <ListItem  key={info}>
            <ListItemText primary={info + '：'}/>
            <Input disableUnderline={'true'} placeholder={'Your ' + info}/>
          </ListItem>
        ))}
        <Grid container>
          <Grid xs={2}/> 
          <Grid xs={2}>
            <Button variant='outlined' component='span' color='secondary'>
              Confirm
            </Button>
          </Grid>
          <Grid xs={3}/>
          <Grid xs={2}>
            <Button variant='outlined' component='span' color='primary'>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(informations[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <br />
      <Button variant="outlined" color="black" onClick={handleClickOpen}>
        <Edit/>
        Edit Profile
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}