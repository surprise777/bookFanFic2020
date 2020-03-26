import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './bookDetails.module.css';
import Container from '../../containers/mui/container';
import Grid from '../../containers/mui/grid';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Banner from '../Banner/banner';
import SectionHeader from '../SectionHeader/sectionHeader';
import CommentSection from '../CommentSection/commentSection';


import Tags from '../Tags/tags';


class BookDetail extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.state.login_status)
        this.state = {
            allUser: this.props.state.user,
            targetBook:this.props.state.selectedBook,
        }
        this.handleSelectedBook = this.handleSelectedBook.bind(this)
        this.searchingTagChange = this.searchingTagChange.bind(this)


    }

    async searchingTagChange(e){
        e.persist()
        this.setState({input: e.target.innerText})
        let tempState = this.props.state
        tempState.header.input = e.target.innerText
        console.log(tempState.header.input)
        this.props.handler(tempState)

    }

    async handleSelectedBook(e){
        let tempState = this.props.state
        tempState.selectedBook = this.props.state.book.filter(b => b.brefTitle === e.target.innerText)[0]
        console.log(tempState)
        await this.props.handler(tempState)

    }

    render() {
        return (
            <Container maxWidth={false} disableGutters={true}>
                <Banner />
                <Container maxWidth='lg'>
                    <Box pt={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} md={3}>
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Box>
                                            <img className={styles.cardLayout} alt='' src={this.state.targetBook.image}>
                                            </img>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Container maxWidth='lg'>
                                    <Box pt={1}>
                                    <Typography variant="h4">{this.state.targetBook.title}</Typography>
                                    </Box>
                                    <Box pt={2}>
                                        <div>Author: {this.state.targetBook.author}</div>
                                        <div>Published: {this.state.targetBook.published}</div>
        <div>Gneres: {this.state.targetBook.genres.map((g, index) => <span key={index}>{g}</span>)}</div>
                                        <div>Id: {this.state.targetBook.id}</div>
                                    </Box>
                                    </Container>
                                </Grid>
                            </Grid>
                            <Container maxWidth='lg'>
                                <Box pt={6}>
                                <SectionHeader headerText="Description" />
                                <Container maxWidth='lg'>
                                    <Box pt={1}>
                                        {this.state.targetBook.description}
                                    </Box>
                                </Container>
                                </Box>
                                <Box pt={10}>
                                    <SectionHeader headerText="Comments"/>
                                    <CommentSection/>
                                </Box>
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box pt={4} className={styles.shrink}>
                                <SectionHeader headerText="Rating" />
                                <Box className={styles.padding_left}>
                                    <Rating
                                        value={4.53}
                                        precision={0.5}
                                        readOnly={true}
                                        size={"medium"}
                                    />
                                    
                                    <Typography variant='h4' className={styles.rating}>{this.state.targetBook.rating}</Typography>
                                    <div>{this.state.targetBook.numOfRating}</div>
                                    
                                </Box>
                            </Box>
                            <Box pt={4} className={styles.shrink}>
                                <SectionHeader headerText="Tags" />
                                <Tags tags={this.state.targetBook.genres} handle={this.searchingTagChange}/>
                            </Box>
                            <Box pt={6} className={styles.shrink}>
                                <SectionHeader headerText="Recent" />
                                <Box className={styles.trending} pb={2} pt={2}>
                                    <Box className={styles.padding_left}>
                                        {this.state.targetBook.relatedBook.map((b, index) => <React.Fragment key={index}><div className={styles.bookTitle} onClick={this.handleSelectedBook} >{b.title}</div>
                                        <div className={styles.author}>{b.author}}</div></React.Fragment>)}
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    </Box>
                </Container>
            </Container>
        )
    }
}

export default BookDetail;
