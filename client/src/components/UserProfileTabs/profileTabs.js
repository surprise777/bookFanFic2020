import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from "./profileTabs.module.css"
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import profileTabsContent from '../../contents/profileTabs';
import { BookDialog } from '../../actions/viewBookDetails';
import Button from '../../containers/mui/button';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '../../containers/mui/grid';
import TextField from '@material-ui/core/TextField';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'transparent',
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
                    <Tab label={profileTabsContent.commentsLabel} {...a11yProps(0)} />
                    <Tab label={profileTabsContent.reviewsLabel} {...a11yProps(1)} />
                </Tabs>
            </AppBar>
      
            <TabPanel value={value} index={0}>
                <Grid container item xs={8} sm={8} alignItems="center" fullWidth>
                    <Grid container item alignItems="center" justify="center">
                        <TextField id="search-field" placeholder={''} fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Button> <SearchIcon /></Button>
                                    </InputAdornment>
                                ),
                            }} />
                    </Grid>
                </Grid>
                <List className={styles.list}>
                    {profileTabsContent.comments.map((c, key) => (
                        <React.Fragment key={key}>
                            <Divider variant="fullWidth" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={c.book} src={c.src} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Link onClick={() => BookDialog(c)}>
                                                <Typography variant='h5' component="span" className={styles.comment_title}> {c.book} </Typography>
                                            </Link>
                                        </React.Fragment>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant='p' className={styles.comment_content}
                                                gutterBottom
                                            >{c.comment}</Typography>
                                        </React.Fragment>
                                    }                            
                                />
                                <React.Fragment>
                                    <Button
                                    component="span"
                                    onClick={() => BookDialog(c)}     // TODO: change it to Delete()
                                    >
                                    Delete</Button>
                                </React.Fragment>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Grid container item xs={8} sm={8} alignItems="center" fullWidth>
                    <Grid container item alignItems="center" justify="center">
                        <TextField id="search-field" placeholder={''} fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Button> <SearchIcon /></Button>
                                    </InputAdornment>
                                ),
                            }} />
                    </Grid>
                </Grid>
                <List className={styles.list}>
                    {profileTabsContent.reviews.map((c, key) => (
                        <React.Fragment key={key}>
                            <Divider variant="fullWidth" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={c.book} src={c.src} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Link onClick={() => BookDialog(c)}>
                                                <Typography variant='h5' component="span" className={styles.comment_title}> {c.book} </Typography>
                                            </Link>
                                        </React.Fragment>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant='p' className={styles.comment_content}
                                                gutterBottom
                                            >Title: {c.title}</Typography>
                                        </React.Fragment>
                                    }
                                                                
                                />
                                <React.Fragment>
                                    <Button
                                    component="span"
                                    gutterBottom
                                    onClick={() => (
                                        console.log(c.content)
                                    )}     // TODO: change it to Delete()
                                    >
                                    Delete</Button>
                                </React.Fragment>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </TabPanel>
        </div>
    );
}
