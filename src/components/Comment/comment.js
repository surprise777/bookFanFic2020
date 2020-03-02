import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '../../containers/mui/grid';
import Container from '../../containers/mui/container';

class Comment extends React.Component{
    render() {
        const {userName, icon_url, content} = this.props;
        return(
            <Container>
                {content}
            </Container>
        )
    }
}

export default Comment;