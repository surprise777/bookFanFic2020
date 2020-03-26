import React from "react";
import Container from '../../containers/mui/container';
import styles from "./sideBar.module.css"
import Grid from '../../containers/mui/grid';
import { Box } from "@material-ui/core";
import Tags from '../Tags/tags';
import {tags} from '../../contents/tag_collection';
import Trending from '../Trending/trending';
import SectionHeader from '../SectionHeader/sectionHeader';
import SiedBarContent from '../../contents/sideBar';

class SideBar extends React.Component{
   render(){
    const{book, handleSearching, handleSelectedBook} = this.props
    return ( <Grid item xs>
        <Box px={6} pt={10}>
            <SectionHeader headerText={SiedBarContent.titles.popular_tags} />
            <Tags tags={tags} handle={handleSearching}/>
        </Box>
        <Box px={6} pt={8} className={styles.overWidth}>
            <SectionHeader headerText={SiedBarContent.titles.trending} />
            <Trending book={book} handle={handleSelectedBook}/>
        </Box>
        <Box px={6} pt={8}>
            <SectionHeader headerText={SiedBarContent.titles.contact_us} />
            <Container maxWidth='md'>
                {SiedBarContent.info.map(
                    (item, index) => (<div className={styles.contact} key={index}><strong>{item.tag}</strong>{item.u}</div>)
                )}
            </Container>
        </Box>
    </Grid>)
   }

}
export default SideBar;