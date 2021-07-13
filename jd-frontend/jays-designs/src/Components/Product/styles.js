import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        backgroundColor: 'black',
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: '.5px 1px 1px 1px rgb(51,51,51)',
        color: 'white',
        minHeight: '750px',
        marginBottom: '2em',
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
    },
    media: {
        paddingTop: '65%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '10px',
        backgroundColor: 'rgb(0,255,105)',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    cardTitle: {
        borderBottom: '1px solid white',
        marginBottom: '15px',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: 'white',
    },
    Text: {
        marginTop: '15px',
    },
    Button: {
        marginTop: '2em'
    },
}))