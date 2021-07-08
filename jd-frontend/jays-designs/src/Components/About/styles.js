import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        position: 'fixed',
        top: '0',
    },
    aboutContent: {
        marginTop: '6em',
        padding: '20px',
        width: '60%',
        height: '80vh',
        marginRight: 'auto',
        marginLeft: 'auto',
        border: 'solid 3px black',
        borderRadius: '10px',
        backgroundColor: 'rgb(23, 23, 23)',
        boxShadow: '.5px 1px 1px 1px rgb(20, 20, 20)'
    },
    img: {
        marginTop: '1.5em',
        border: 'solid 1px black',
        borderRadius: '5px',
        float: 'left',
        marginRight: '15px',
    },
    text: {
        marginTop: '4em',
        color: 'white',
        lineHeight: '230%'
    }
}));