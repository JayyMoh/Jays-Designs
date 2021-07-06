import React from 'react'
import { Grid } from '@material-ui/core'
import Product from '../Product/Product'


const products = [
    { id: 1, name: 'shoes', description: 'Running shoes', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/pdg9dvv1nliv7ydhck1r/free-rn-2018-mens-running-shoe-4VTnGqeZ.png' },
    { id: 2, name: 'MacBook', description: 'Apple MacBook', price: '$300', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603332211000' },
    { id: 3, name: 'hat', description: 'Bowler Hat', price: '$20', image: 'https://images-na.ssl-images-amazon.com/images/I/513iwWKPijL._AC_UL1000_.jpg' }
]

function Shop() {
    return (
        <div>
            <div className="heading-container">
                <Grid container justify="center" spacing={ 4 }>
                    {products.map(( product ) => (
                        <Grid item key={ product.id } xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
                            <Product 
                              product={ product }  
                            />
                        </Grid>    
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Shop