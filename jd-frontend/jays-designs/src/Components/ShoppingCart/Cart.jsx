import React from 'react'
import Item from './CartItem/Item'
import { Typography, Container, Button, Grid } from '@material-ui/core'
import { Link } from '@material-ui/core'
import useStyles from './styles'

function Cart({ cart, RemoveCartItem, ClearCart }) {

    const classes = useStyles()

    const EmptyCart = () => (
        <Typography varient="subtitle1">
            Oops. Looks like there are no items in the cart yet.
        </Typography>
    )

    const FullCart = () => (
        <React.Fragment>
            <Grid container spacing={2}>
                { cart.line_items.map((item) => (
                    <Grid type="item" key={ item.id } xs={12} sm={6}>
                        <Item
                            item={ item }
                            removeItem={ RemoveCartItem }
                        />
                    </Grid>
                ))}
            </Grid>
            <div className={ classes.cardDetails } >
                <Typography variant="h4">
                    Subtotal: { cart.subtotal.formatted_with_symbol }
                </Typography>
                <div>
                    <Button className={ classes.clearButton } size="large" type="button" variant="contained" color="secondary" onClick={ ClearCart }>
                        Clear Cart
                    </Button>
                    <Button component={Link} to="/checkout" className={ classes.checkoutButton } size="large" type="button" variant="contained" color="primary">
                        Checkout
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )

    if(!cart.line_items) return 'Fetching Cart'

    return (
        <Container>
            <div className={ classes.toolbar } />
            <Typography className={ classes.title } varient="h3">
                Shopping Cart
            </Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FullCart /> }
        </Container>
    )
}

export default Cart
