import React from "react";
import Container from '../../containers/mui/container';
import styles from "./sideBar.module.css"
import Grid from '../../containers/mui/grid';
import { Box } from "@material-ui/core";
import Tags from '../Tags/tags';
import {tags} from '../../contents/tag_collection';
import Trending from '../Trending/trending';
import SectionHeader from '../SectionHeader/sectionHeader';

class SideBar extends React.Component{
   render(){

    return ( <Grid item xs>
        <Box px={6} pt={10}>
            <SectionHeader headerText="Popular tags" />
            <Tags tags={tags}/>
        </Box>
        <Box px={6} pt={8} className={styles.overWidth}>
            <SectionHeader headerText="Trending" />
            <Trending />
        </Box>
        <Box px={6} pt={8}>
            <SectionHeader headerText="Contact us" />
            <Container maxWidth='md'>
                <div className={styles.contact}><strong>Email:</strong> readersclub@gmail.com</div>
                <div className={styles.contact}><strong>Phone:</strong> 3285974683</div>
            </Container>
        </Box>
    </Grid>)
   }

}
export default SideBar;