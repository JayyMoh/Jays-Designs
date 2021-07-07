import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        backgroundColor: 'black',
        color: 'white',
        marginTop: '2em',
        margin: '0 10px',
        borderRadius: '10px',
        marginBottom: '10px',
    },
    media: {
        height: 250,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartActions: {
        justifyContent: 'space-between',
    },
}));