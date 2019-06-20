import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Content from './Content';
import Title from './Title';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
export default function Detail(props) {
    const [title, setTitle] = React.useState(props.title);
    const [content, setContent] = React.useState(props.content);
    const [prevTitle, setPrevTitle] = React.useState(null);
    const [prevContent, setPrevContent] = React.useState(null);
    if (props.title !== prevTitle) {
        setTitle(props.title);
        setPrevTitle(props.title);
    }
    if (props.content !== prevContent) {
        setContent(props.content);
        setPrevContent(props.content);
    }
    const handleClick = e => props.save({
        title, content
    });
    return (
        <Container component="main" maxWidth="xs">
            <Grid container direction={'column'}>
                <Title value={title} onChange={setTitle} />
                <Content value={content} onChange={setContent} />
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        // className={classes.submit}
                        onClick={handleClick}
                    >
                        Save
                   </Button>
                </Grid>
            </Grid>
        </Container>
    )
}
Detail.defaultProps = {
    title: '',
    content: '',
    save: () => { }
};
Detail.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    save: PropTypes.func
};