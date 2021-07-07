import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

function Product({ product, AddToCart }) {

    const classes = useStyles()

    return (
        <div className="page-container">
            <Card className={ classes.root }>
                <CardMedia className={ classes.media } image={ product.media.source } title={ product.name } />
                <CardContent>
                    <div className={ classes.cardContent }>
                        <Typography variant="h4" gutterBottom>
                            { product.name }
                        </Typography>
                        <Typography variant="h5">
                            { product.price.formatted_with_symbol }
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} />
                    <CardActions disableSpacing className={ classes.cardActions }>
                        <IconButton
                            aria-label="Add to Cart"
                            color="inherit"
                            onClick={() => AddToCart(product.id, 1) } 
                        >
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    )
}

export default Product
