import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

function Product({ product, AddToCart }) {

    const classes = useStyles()

    return (
        <div className="page-container">
            <Card className={ classes.root }>

                <CardContent>
                    <div className={ classes.cardContent }>
                        <Typography variant="h4" gutterBottom>
                            { product.name }
                        </Typography>
                        <Typography variant="h5">
                            { product.price.formatted_with_symbol }
                        </Typography>
                    </div>
                    <CardMedia className={ classes.media } image={ product.media.source } title={ product.name } />

                    <Typography className={ classes.Text } dangerouslySetInnerHTML={{ __html: product.description }} />
                    <div className={ classes.Button }>
                        <CardActions disableSpacing className={ classes.cardActions }>
                            <IconButton
                                aria-label="Add to Cart"
                                color="inherit"
                                onClick={() => AddToCart(product.id, 1) }
                            >
                                <AddShoppingCart /> Add to Cart
                            </IconButton>
                        </CardActions>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Product
