import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Content from './Content';
import Title from './Title';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root:{
        paddingTop:theme.spacing(2)
    },
    button: {
        float:'right'
    }
  }));
export default function Detail(props) {
    const classes = useStyles();
    // const {save,title1,content1} = props;
    const [title, setTitle] = React.useState(props.title);
    // const [title, setTitle] = React.useState(props.title);
    const [content, setContent] = React.useState(props.content);
    const [prevTitle, setPrevTitle] = React.useState(null);
    const [prevContent, setPrevContent] = React.useState(null);

    React.useEffect(() => {
        setTitle(props.title); 
    }, [props.title]);

    React.useEffect(() => {
        setTitle(props.content); 
    }, [props.content]);

    // if (props.title !== prevTitle) {
    //     setTitle(props.title);
    //     setPrevTitle(props.title);
    // }
    // if (props.content !== prevContent) {
    //     setContent(props.content);
    //     setPrevContent(props.content);
    // }
    // const handleClick = React.useCallback(
    //     e => {
    //         save({
    //             title:title1,
    //             content
    //         })
    //     },
    //     [save,title1],
    // )
    const handleClick = e => props.save({
        title, content
    });
    return (
        <Container classes={{root:classes.root}}>
            <Typography component="h1" variant="h5">
                Edit
            </Typography>
            <Grid container direction={'column'}>
                <Title value={title} onChange={setTitle} />
                <Content value={content} onChange={setContent} />
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
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