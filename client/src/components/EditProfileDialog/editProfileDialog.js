import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import Box from "@material-ui/core/Box";
import Edit from '@material-ui/icons/Edit';
import { Input, StylesProvider } from '@material-ui/core';
import Grid from '../../containers/mui/grid';
import EditProfileDialogContent from '../../contents/editProfileDialog';
import Typography from '@material-ui/core/Typography'
import styles from './editProfileDialog.module.css';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ProfileForm from './profileForm';

const informations = ['Name', 'Password', 'Signiture'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open, user } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} maxWidth="md">
      <Grid container item xs={12} justify="center" >
        <Typography className={styles.paddingSides} variant="h5" color="secondary">
          If you don't want to change any of these, leave it blank
        </Typography>
      </Grid>
      <ProfileForm user={user}/>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(informations[1]);
  const {user} = props
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <br/>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {EditProfileDialogContent.edit}
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} user={user}/>
    </div>
  );
}