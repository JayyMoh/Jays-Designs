import React from 'react'
import { Grid } from '@material-ui/core'
import Product from '../Product/Product'


function Shop({ products, AddToCart }) {
    return (
        <div>
            <div className="heading-container">
                <Grid container spacing={ 4 }>
                    {products.map(( product ) => (
                        <Grid item key={ product.id } xs={ 12 } sm={ 6 } md={ 4 }>
                            <Product
                              product={ product }
                              AddToCart={ AddToCart }
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Shop