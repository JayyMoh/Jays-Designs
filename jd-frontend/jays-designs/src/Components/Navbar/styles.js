import { makeStyles, alpha } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles(() => ({
    appBar: {
        backgroundColor: 'black',
        boxShadow: 'none',
        borderBottom: '1px solid rgb(0,255,105)',
    },
    Link: {
        color: 'rgb(0,255,105)',
        '&:hover': {
            textDecoration: 'none',
            color: 'white',
        }
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
    },
    image: {
        marginRight: '10px',
    },
    grow: {
        flexGrow: 1,
    },
}));