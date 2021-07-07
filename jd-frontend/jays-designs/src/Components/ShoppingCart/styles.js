import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    title: {
        marginTop: '2.5em',
        fontSize: '2em',
        textAlign: 'center',
        padding: '10px',
        borderBottom: 'solid 1px black',
        marginBottom: '15px'
    },
    checkoutButton: {
        minWidth: '150px',
        color: 'white',
        backgroundColor: 'black',
        margin: '0 10px'
    },
    link: {
        textDecoration: 'none',
    },
    cardDetails: {
        display: 'flex',
        marginTop: '3em',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '6em',
        borderTop: 'solid 1px black',
        padding: '10px',
    },
}));