import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '../../containers/mui/grid';
import EditProfileDialogContent from '../../contents/editProfileDialog';
import Typography from '@material-ui/core/Typography'
import styles from './editProfileDialog.module.css';
import ProfileForm from './profileForm';

const informations = ['Name', 'Password', 'Signature'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open, user } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} maxWidth="md">
      <Grid container item xs={12} justify="center" >
        <Typography className={styles.paddingSides} variant="h3" color="secondary">
          Edit Profile
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