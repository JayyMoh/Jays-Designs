import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

const Product = ({ product }) => {

    const classes = useStyles()

    return (
        <div className="page-container">
            <Card className={ classes.root }>
                <CardMedia className={ classes.media } image={ product.image } title={ product.name } />
                <CardContent>
                    <div className={ classes.cardContent }>
                        <Typography variant="h4" gutterBottom>
                            { product.name }
                        </Typography>
                        <Typography variant="h4">
                            { product.price }
                        </Typography>
                    </div>
                    <Typography paragraph={ true }>
                        { product.description }
                    </Typography>
                    <CardActions disableSpacing className={ classes.cardActions }>
                        <IconButton aria-label="Add to Cart">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    )
}

export default Product
