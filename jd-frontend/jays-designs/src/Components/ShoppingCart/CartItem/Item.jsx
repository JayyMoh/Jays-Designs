import React from 'react'
import { Typography, Card, CardActions, Button, CardContent, CardMedia } from '@material-ui/core'
import useStyles from './styles'

function Item({ item, removeItem }) {

    const classes = useStyles()

    return (
        <Card className={ classes.root }>
            <CardMedia image={ item.media.source } alt={ item.name } className={ classes.media } />
            <CardContent className={ classes.cardContent } >
                <Typography variant="h4"> { item.name } </Typography>
                <Typography variant="h4"> { item.line_total.formatted_with_symbol } </Typography>
            </CardContent>
            <CardActions className={ classes.cardActions }>
                <Button variant="contained" type="button" color="secondary" onClick={() => removeItem(item.id)}>
                    Remove From Cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default Item
