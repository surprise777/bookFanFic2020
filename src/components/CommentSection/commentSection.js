import React from 'react';
import comments from '../../contents/commentCollection';
import Comment from '../Comment/comment';
import Box from '@material-ui/core/Box';
import Container from '../../containers/mui/container';
import SectionHeader from '../SectionHeader/sectionHeader';


class CommentSection extends React.Component {
    render() {
        return (
            <Box>
                {comments.map((comment) => {
                    const {userName, img_url, content} = comment;
                    return (                       
                        <Comment userName={userName} icon_url={img_url} content={content}/>
                    )
                })}
            </Box>
        )
    }
}

export default CommentSection;