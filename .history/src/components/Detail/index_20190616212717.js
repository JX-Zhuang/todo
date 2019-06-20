import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Content from './Content';
import Title from './Title';
import Button from '@material-ui/core/Button';
export default function Detail(props) {
    const [title, setTitle] = React.setState(props.title);
    const [content, setContent] = React.setState(props.content);
    const [prevTitle, setPrevTitle] = React.setState(null);
    const [prevContent, setPrevContent] = React.setState(null);
    if (prevTitle !== null && title !== prevTitle) {
        setTitle(props.title);
        setPrevTitle(props.title);
    }
    if (prevContent !== null && content !== prevContent) {
        setContent(props.content);
        setPrevContent(props.content);
    }
    const handleClick = e => props.save({
        title, content
    });
    return <Grid container direction={'column'}>
        <Title value={title} onChange={setTitle} />
        <Content value={content} onChange={setContent} />
        <Grid item xs={12} justify="flex-end">
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleClick}
            >
                Save
          </Button>
        </Grid>
    </Grid>
}
Detail.defaultProps = {
    title: '',
    content: '',
    save: () => void
};
Detail.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    save: PropTypes.func
};