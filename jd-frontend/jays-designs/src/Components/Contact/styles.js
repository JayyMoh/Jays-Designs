import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        position: 'fixed',
        top: '0',
    },
    content: {
        padding: '20px',
        width: '80%',
        height: '100vh',
        marginRight: 'auto',
        marginLeft: 'auto',
        border: 'solid 3px black',
        borderRadius: '10px',
        backgroundColor: 'rgb(23, 23, 23)',
        boxShadow: '.5px 1px 1px 1px rgb(20, 20, 20)'
    },
    head: {
        marginTop: '2em',
    },
    form: {
        marginTop: '2.5em',
        backgroundColor: 'white',
        padding: '20px',
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px',
    },
    textField: {
        width: '100%',
        margin: '10px 0',
    },
    button: {
        marginTop: '2em',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'black',
        color: 'white',
        width: '10%',
        marginBottom: '2em',
    }
}));