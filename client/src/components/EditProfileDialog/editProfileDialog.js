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

const informations = ['Name', 'Email', 'Password'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

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
      <List>
        <Grid container spacing={0} xs={12}>
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box display="flex-center">
                
                <Button>

                  <AddPhotoAlternateIcon style={{ fontSize: 100 }}/>
  
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {informations.map((info) => (
              <ListItem  key={info}>
                <ListItemText primary={info + '：'} justify="flex-end" />
                <Input disableUnderline placeholder={'New ' + info}/>
              </ListItem>
            ))}
          </Grid>
        </Grid>

        <Grid container className={styles.paddingTop} item xs={12}>
          <Grid container item xs={1}></Grid>
          <Grid container item xs={5} justify="flex-start">
            <Button variant='outlined' component='span' color='secondary'>
              {EditProfileDialogContent.confirm}
            </Button>
          </Grid>      
          <Grid container item xs={5} justify="flex-end">
            <Button variant='outlined' component='span' color='primary' onClick={handleClose}>
              {EditProfileDialogContent.cancel}
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
      <br/>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {EditProfileDialogContent.edit}
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}