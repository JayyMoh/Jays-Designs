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
        margin: '5px 0',
        width: '100%',
        border: '1px solid gray',
        borderRadius: '5px',
    },
    button: {
        marginTop: '2em',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'black',
        color: 'white',
        width: '10%',
        marginBottom: '2em',
    },
    sub2: {
        color: 'black',
        marginLeft: '10px',
        marginTop: '10px',
    },
    paymentFormBtn: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardElement: {
        border: '1px solid gray',
        borderRadius: '5px',
        padding: '10px',
        height: '45px',
        marginBottom: '10px',
    },
}));