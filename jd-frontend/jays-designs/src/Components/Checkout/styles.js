import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    head: {
        marginTop: '1em',
        padding: '20px',
        color: 'white',
        borderBottom: '2px solid black'
    },
    sub: {
        marginTop: '15px',
    },
    form: {
        border: '2px solid black',
        borderRadius: '10px',
        padding: '20px',
        marginTop: '2em',
        width: '60%',
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: 'white',
    },
    textField: {
        margin: '0 10px',
    }
}));