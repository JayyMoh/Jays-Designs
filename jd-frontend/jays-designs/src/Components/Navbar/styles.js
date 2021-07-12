import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

export default makeStyles((theme) => ({
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
    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    navUl: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',      
    },
    navLi: {
        float: 'left',
        marginRight: '10px',
        border: '2px solid black',
        padding: '5px',
        borderRadius: '5px',
        color: 'rgb(0,255,105)',
        textDecoration: 'none',      
    }
}));


