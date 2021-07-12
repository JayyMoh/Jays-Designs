import React, { useEffect, useState } from 'react'
import { Container, Button, Typography, Grid, TextField } from '@material-ui/core'
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { useForm, FormProvider } from 'react-hook-form'
import { loadStripe } from '@stripe/stripe-js'
import { commerce } from '../../Commerce/commerce'
import useStyles from './styles'

const stripePromise = loadStripe('pk_test_51JB71VAcLqtIYvVyHdXgdZdByPdIrk85MdSIJWU6OIuTOz4dN38mg9tH39S90A82EaG798yatgXP8Jc4RrcbnGpS00Z00txP0Z')


function Checkout({ cart, order, onCheckout, error }) {
    const [checkoutToken, setCheckoutToken] = useState()
    const classes = useStyles()
    const methods = useForm()

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' } )
                console.log(token)
                setCheckoutToken(token)
            } catch (error) {

            }
        }

        generateToken()
    }, [])


    const handleSubmit = async (e, elements, stripe) => {
        e.preventDefault()
        if (!stripe || !elements) return

        const cardElement = elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement)
        const { paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement })
        const orderData = {
            customer: { firstname: orderData.firstName, lastname: orderData.lastName, email: orderData.email },
            shipping: { email: orderData.email },
            payment: {
                gateway: 'stripe',
                stripe: {
                    payment_method_id: paymentMethod.id
                }
            }
        }
        console.log(orderData.firstName)
        onCheckout(checkoutToken.id, orderData)
    }

    return (
        <div>
            <div className="page-container">
                <Container maxWidth="xl">
                    <Typography component="div" style={{ backgroundColor: 'rgb(30,30,30)', height: '100vh' }}>
                        <Typography className={ classes.head } variant="h3" align="center">Checkout</Typography>
                        <Typography className={ classes.sub } variant="h5" align="center">Shipping & Payment</Typography>
                        <FormProvider {...methods}>
                            <Grid container spacing={2}>
                                <Elements stripe={ stripePromise }>
                                    <ElementsConsumer>
                                        {({ stripe }) => (
                                            <form className={ classes.form } onSubmit={''} >
                                                <Typography className={ classes.sub2 } variant="h6">Contact & Shipping Information</Typography>
                                                <TextField className={ classes.textField } id="firstName" label="First Name" variant="outlined" required></TextField>
                                                <TextField className={ classes.textField } id="lastName" label="Last Name" variant="outlined" required></TextField>
                                                <TextField className={ classes.textField } id="email" label="E-Mail" variant="outlined" required></TextField>
                                                <br />
                                                <Typography className={ classes.sub2 } variant="h6">Payment Information</Typography>
                                                <TextField className={ classes.textField } id="cardHoler" label="Name on Card" variant="outlined" required></TextField>
                                                <CardNumberElement className={ classes.cardElement } />
                                                <CardExpiryElement className={ classes.cardElement } />
                                                <CardCvcElement className={ classes.cardElement } />
                                                <div className={ classes.paymentFormBtn }>
                                                    <Button className={ classes.button } type="submit" disable={ !stripe }>Confirm Purchase </Button>
                                                </div>
                                            </form>
                                        )}
                                    </ElementsConsumer>
                                </Elements>
                            </Grid>
                            </FormProvider>
                    </Typography>
                </Container>
            </div>
        </div>
    )
}

export default Checkout