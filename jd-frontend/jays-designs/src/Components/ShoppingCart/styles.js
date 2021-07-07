import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '1em',
        fontSize: '2em',
        textAlign: 'center',
        padding: '10px',
        borderBottom: 'solid 1px black',
        marginBottom: '15px'
    },
    emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px',
        },
    },
    checkoutButton: {
        minWidth: '150px',
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