import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        backgroundColor: 'black',
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: '.5px 1px 1px 1px rgb(51,51,51)',
        color: 'white',
    },
    media: {
        height: 0,
        paddingTop: '65%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
    },
}))