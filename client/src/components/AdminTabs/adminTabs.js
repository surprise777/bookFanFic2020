import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from "./adminTabs.module.css"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AdminTabsContent from '../../contents/adminTabs';
import Button from '../../containers/mui/button';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '../../containers/mui/grid';
import TextField from '@material-ui/core/TextField';
import { handleDeleteBook } from '../../actions/book';
import { handleDeleteComment } from '../../actions/comment';
import { handleDeleteReview } from '../../actions/review'

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

export default function SimpleTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { page, app } = props;
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label={AdminTabsContent.booksLabel} {...a11yProps(0)} />
                    <Tab label={AdminTabsContent.commentsLabel} {...a11yProps(1)} />
                    <Tab label={AdminTabsContent.reviewsLabel} {...a11yProps(2)} />
                    <Tab label={AdminTabsContent.usersLabel} {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Grid container item xs={8} sm={8} alignItems="center" fullWidth>
                    <Grid container item alignItems="center" justify="center">
                        <TextField id="search-field" placeholder={'Search Book'} fullWidth
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
                    {app.state.allBooks.map((b, key) => (
                        <React.Fragment key={key}>
                            <Divider variant="fullWidth" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={b.brefTitle} src={b.cover_url} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography variant='h5' component="span" className={styles.comment_title}> {b.title} </Typography>
                                        </React.Fragment>
                                    }

                                />
                                <React.Fragment>
                                    <Button
                                        component="span"
                                        gutterBottom
                                        onClick={() => handleDeleteBook(b._id)}
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
                        <TextField id="search-field" placeholder={'Search Comment'} fullWidth
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
                    {app.state.allComments.map((c, key) => (
                        <React.Fragment key={key}>
                            <Divider variant="fullWidth" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={c.userName} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography variant='h5' component="span" className={styles.comment_title}> {c.userName} >>
                                                    <Typography className={styles.commenter} variant='h6'> {c.date} </Typography>
                                            </Typography>
                                        </React.Fragment>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant='p' className={styles.comment_content}
                                                gutterBottom
                                            >{c.content}</Typography>
                                        </React.Fragment>
                                    }
                                />
                                <React.Fragment>
                                    <Button
                                        component="span"
                                        onClick={() => handleDeleteComment(c._id)}     // TODO: change it to Delete()
                                    >
                                        Delete</Button>
                                </React.Fragment>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <Grid container item xs={8} sm={8} alignItems="center" fullWidth>
                    <Grid container item alignItems="center" justify="center">
                        <TextField id="search-field" placeholder={'Search Review'} fullWidth
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
                    {app.state.allReviews.map((r, key) => (
                        <React.Fragment key={key}>
                            <Divider variant='fullWidth' component='li' />
                            <ListItem alignItems='flex-start'>

                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Grid className={styles.comment_title}>
                                                <Typography variant='h5' component='span' className={styles.comment_title}> {r.title} </Typography>
                                            </Grid>
                                        </React.Fragment>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant='p' className={styles.comment_content}
                                                gutterBottom
                                            > author: {r.userName}</Typography>
                                        </React.Fragment>
                                    }
                                />
                                <React.Fragment>
                                    <Button
                                        component="span"
                                        gutterBottom
                                        onClick={() => handleDeleteReview(r._id)}     // TODO: change it to Delete()
                                    >
                                        Delete</Button>
                                </React.Fragment>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </TabPanel>

            <TabPanel value={value} index={3}>
                <List className={styles.list}>
                    {app.state.allUser.map((u, key) => (
                        <React.Fragment key={key}>
                            <Divider variant="fullWidth" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={u.icon_id} src={u.icon_url} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Grid className={styles.comment_title}>
                                                <Typography variant='h6' component="span" className={styles.commenter}> {u.userName} </Typography>
                                            </Grid>
                                        </React.Fragment>
                                    }
                                />

                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </TabPanel>
        </div>
    );
}
